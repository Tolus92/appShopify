import React from 'react';
import { Link, Icon } from "@shopify/polaris";
import {useNavigate} from '@shopify/app-bridge-react';
import './../assets/styles.css';
import {
    HomeMajor,
    MarketingMajor,
    CashDollarMajor,
    ComposeMajor,
    ProductCostMajor,
    TaxMajor,
    PinMajor,
    InventoryMajor,
    ShipmentMajor,
    TitleMinor,
    SandboxMajor,
    ExistingInventoryMajor,
    NoteMajor,
    BankMajor
  } from '@shopify/polaris-icons';

const CustomSidebar = () => {
    const navigate = useNavigate();

  return (
    <>
     <div class="sidebar">
        <div class="sidebar-top">
            {/* <i class="logo fa-brands fa-sketch"></i> */}
            <Icon source={HomeMajor} color="subdued"/>
            {/* <span class="brand">Home</span> */}
        </div>
        <div class="sidebar-center">
            <ul class="list">
                <li class="list-item">
               <div class="pedro"> <Icon source={MarketingMajor} color="subdued"/><span class="pedro1"><Link removeUnderline monochrome onClick={() => {
             navigate('https://admin.shopify.com/store/nowatest/apps/app-custom-5/pagename');
                    }}>Product SEO</Link></span></div>      
                </li>
                <li class="list-item">
                <div class="pedro"> <Icon source={CashDollarMajor} color="subdued"/><span class="pedro1"><Link removeUnderline monochrome onClick={() => {
             navigate('https://admin.shopify.com/store/nowatest/apps/app-custom-5/pagename');
                    }}>Price</Link></span></div>    
                </li>
                <li class="list-item">
                <div class="pedro"> <Icon source={ComposeMajor} color="subdued"/><span class="pedro1"><Link removeUnderline monochrome onClick={() => {
             navigate('https://admin.shopify.com/store/nowatest/apps/app-custom-5/pagename');
                    }}>Compared</Link></span></div>    
                </li>

                <li class="list-item">
                    <div class="pedro"> <Icon source={ProductCostMajor} color="subdued"/><span class="pedro1"><Link removeUnderline monochrome onClick={() => {
             navigate('https://admin.shopify.com/store/nowatest/apps/app-custom-5/pagename');
                    }}>Cost</Link></span></div>    
                </li>
                <li class="list-item">
                <div class="pedro"> <Icon source={TaxMajor} color="subdued"/><span class="pedro1"><Link removeUnderline monochrome onClick={() => {
             navigate('https://admin.shopify.com/store/nowatest/apps/app-custom-5/pagename');
                    }}>Tax</Link></span></div>    
                </li>
                <li class="list-item">
                <div class="pedro"> <Icon source={PinMajor} color="subdued"/><span class="pedro1"><Link removeUnderline monochrome onClick={() => {
             navigate('https://admin.shopify.com/store/nowatest/apps/app-custom-5/pagename');
                    }}>SKU & Barcode</Link></span></div>    
                </li>
                <li class="list-item">
                <div class="pedro"> <Icon source={InventoryMajor} color="subdued"/><span class="pedro1"><Link removeUnderline monochrome onClick={() => {
             navigate('https://admin.shopify.com/store/nowatest/apps/app-custom-5/pagename');
                    }}>Inventory</Link></span></div>    
                </li>
                <li class="list-item">
                <div class="pedro"> <Icon source={ShipmentMajor} color="subdued"/><span class="pedro1"><Link removeUnderline monochrome onClick={() => {
             navigate('https://admin.shopify.com/store/nowatest/apps/app-custom-5/pagename');
                    }}>Shipping</Link></span></div>    
                </li>
                <li class="list-item">
                <div class="pedro"> <Icon source={TitleMinor} color="subdued"/><span class="pedro1"><Link removeUnderline monochrome onClick={() => {
             navigate('https://admin.shopify.com/store/nowatest/apps/app-custom-5/pagename');
                    }}>Title</Link></span></div>    
                </li>
                <li class="list-item">
                <div class="pedro"> <Icon source={SandboxMajor} color="subdued"/><span class="pedro1"><Link removeUnderline monochrome onClick={() => {
             navigate('https://admin.shopify.com/store/nowatest/apps/app-custom-5/pagename');
                    }}>Description</Link></span></div>    
                </li>
                <li class="list-item">
                <div class="pedro"> <Icon source={ExistingInventoryMajor} color="subdued"/><span class="pedro1"><Link removeUnderline monochrome onClick={() => {
             navigate('https://admin.shopify.com/store/nowatest/apps/app-custom-5/pagename');
                    }}>Product Type</Link></span></div>    
                </li>
                <li class="list-item">
                <div class="pedro"> <Icon source={NoteMajor} color="subdued"/><span class="pedro1"><Link removeUnderline monochrome onClick={() => {
             navigate('https://admin.shopify.com/store/nowatest/apps/app-custom-5/pagename');
                    }}>Tag</Link></span></div>    
                </li>
                <li class="list-item">
                <div class="pedro"> <Icon source={BankMajor} color="subdued"/><span class="pedro1"><Link removeUnderline monochrome onClick={() => {
             navigate('https://admin.shopify.com/store/nowatest/apps/app-custom-5/pagename');
                    }}>Vendor</Link></span></div>    
                </li>
               
            </ul>
        </div>
        <div class="sidebar-bottom">
            <div class="color-box dark"></div>
            <div class="color-box night"></div>
            <div class="color-box light"></div>
        </div>
    </div>
    </>
  )
}

export default CustomSidebar