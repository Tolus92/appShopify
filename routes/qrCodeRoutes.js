const express = require('express');
const router = express.Router();
const axios = require('axios');

// Inclure les routes du premier projet
const qrCodeRoutes = require('C:/Users/nnato/Desktop/notif-sms/QRcode/Projet QRCode/routes/qrCodeRoutes');

// Définir les routes du deuxième projet
router.get('/my-route', async (req, res) => {
  try {
    const response = await axios.get('https://2NmORmEoaxRaZCbfjYcPMC9dnb7_6hDhwPR3jPqdHuTpwWHra.ngrok.io/api/qr-codes');
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

router.post('/qr-code', async (req, res) => {
  try {
    const { data } = req.body;
    // Effectuez les opérations nécessaires avec les données ici (par exemple, enregistrez-les dans une base de données)
    console.log('Données scannées:', data);
    res.status(200).json({ message: 'Données scannées avec succès' });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// Utiliser les routes du premier projet
router.use('/api/qr-codes', qrCodeRoutes);

module.exports = router;