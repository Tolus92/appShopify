// @ts-check
import { join } from "path";
import { readFileSync } from "fs";
import express from "express";
import serveStatic from "serve-static";

import shopify from "./shopify.js";
import productCreator from "./product-creator.js";
import GDPRWebhookHandlers from "./gdpr.js";

const PORT = parseInt(process.env.BACKEND_PORT || process.env.PORT, 10);

const STATIC_PATH =
  process.env.NODE_ENV === "production"
    ? `${process.cwd()}/frontend/dist`
    : `${process.cwd()}/frontend/`;

const app = express();

// Set up Shopify authentication and webhook handling
app.get(shopify.config.auth.path, shopify.auth.begin());
app.get(
  shopify.config.auth.callbackPath,
  shopify.auth.callback(),
  shopify.redirectToShopifyOrAppRoot()
);
app.post(
  shopify.config.webhooks.path,
  shopify.processWebhooks({ webhookHandlers: GDPRWebhookHandlers })
);

// If you are adding routes outside of the /api path, remember to
// also add a proxy rule for them in web/frontend/vite.config.js

app.use("/api/*", shopify.validateAuthenticatedSession());

app.use(express.json());

app.get("/api/products/count", async (_req, res) => {
  const countData = await shopify.api.rest.Product.count({
    session: res.locals.shopify.session,
  });
  res.status(200).send(countData);
});
// ------------------------------------------------------------------------------------------------------------

app.get("/api/collections/440978178322", async (_req, res) => {
  try
  {
const response = await shopify.api.rest.Collection.find
({
  session: res.locals.shopify.session,
  id: 440978178322,
});
res.status(200).send(response);
  } 
  catch(err)
  {
     res.status(500).send(err);
  }
});
// ------------------------------------------------------------------------------------------------------------

app.get("/api/orders", async (_req, res ) =>{ 
try 
  {
  const response = await shopify.api.rest.Order.all
  ({
    session : res.locals.shopify.session,
    status: "any",
  });
    res.status(200).send(response)
  } 
catch (err) 
  {
    res.status(500).send(err);
  }
});
// ------------------------------------------------------------------------------------------------------------

app.get ("/api/customers", async (_req, res) =>{
  try 
  {
   const response = await shopify.api.rest.Customer.all
   ({
     session: res.locals.shopify.session,
     ids: "6942539153682" ,
   });
   res.status(200).send(response)
  } 
  catch (err) 
  {
    res.status(500).send(err);
  }
});


// ------------------------------------------------------------------------------------------------------------

app.get("/api/products/create", async( req, res) => {
  if(!req?.body?.title) {
    return res.status(400).json({ 'message': 'field is required'})
  }
  let status = 200
  let error = null
  try 
  {
    const session = res.locals.shopify.session
    const client = new shopify.api.clients.Graphql({session});
    await client.query({
      data: `mutation {
        productCreate(input: { title: ${req.body.title}, productType: "Peanuts", vendor: "Nowa" }) {
          product {
            id
          }
        }
      }`
    })
  } 
  catch(err) 
  {
    console.log(`failed to process request ${err}`)
    status = 500
    error = err.message
  }
  res.status(status).send({ sucess: status === 200, error });
});

app.get("/api/products", async (req, res) => {
  try 
  {
    const session = res.locals.shopify.session
    const data = await shopify.api.rest.Product.all({session: session})
    res.status(200).send(data)
  }
  catch(err) 
  {
    console.log(err)
  }
});

app.get("/api/orders", async (req, res) => {
  try 
  {
    const session = res.locals.shopify.session
    const client = new shopify.api.clients.Graphql({session})
    const queryString = `{
      orders(first: 2) {
        edges {
        } node {
          id
          name
          note
          displayFinancialStatus
        }
      }
    }`
    const data = await client.query({
      data: queryString
    });
    res.status(200).send({data})
  } 
  catch(err)
  {
     res.status(500).send(err);
  }
});

app.get("/api/collections/441527304466", async (req, res) => {
  try 
  {
    const response = await shopify.api.rest.Collection.find({
      session: res.locals.shopify.session,
      id : 441527304466
    });
    res.status(200).send(response);
  } 
  catch (err) 
  {
    res.status(500).send(err);
  }
})

app.get("/api/collections", async (req, res) => {
  try 
  {
    const session = res.locals.shopify.session
    const client = new shopify.api.clients.Graphql({session})
    const response = await client.query({
      data: `query {
            collections(first: 2){
              edges{
                node{
                  id
                  title
                  handle
                  updatedAt
                  productsCount
                  sortOrder
                }
              }
            }
      }`
    })
    res.status(200).send(response);
  } 

  catch(err) 
  {
    res.status(500).send(err);
  }
})

// ------------------------------------------------------------------------------------------------------------
app.get("/api/products/create", async (_req, res) => {
  let status = 200;
  let error = null;

  try {
    await productCreator(res.locals.shopify.session);
  } catch (e) {
    console.log(`Failed to process products/create: ${e.message}`);
    status = 500;
    error = e.message;
  }
  res.status(status).send({ success: status === 200, error });
});

app.use(serveStatic(STATIC_PATH, { index: false }));

app.use("/*", shopify.ensureInstalledOnShop(), async (_req, res, _next) => {
  return res
    .status(200)
    .set("Content-Type", "text/html")
    .send(readFileSync(join(STATIC_PATH, "index.html")));
});


console.log ( "----------------------------------------------------------------------------------------------------------------------------------------------------------");


app.listen(PORT);
