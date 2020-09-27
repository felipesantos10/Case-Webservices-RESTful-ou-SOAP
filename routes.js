const express = require('express');
const router = express.Router();

const Product = require('./models/Product.js');

router.get('/product', async (req, res) => {
  try {
    const products = await Product.find();
    if (!products) throw Error('Erro ao listar produtos.');
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({message: error})
  }
})

router.post('/product', async (req, res) => {
  const newProduct = new Product(req.body);
  try {
    const product = await newProduct.save();
    if (!product) throw Error('Erro ao adicionar o produto. Tente novamente.');
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({message: error})
  }
})

router.patch('/product/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body);
    if (!product) throw Error('Erro ao atualizar os dados do produto. Tente novamente.');
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({message: error})
  }
})

router.delete('/product/:id', async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) throw Error('Produto não encontrado.');
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(400).json({message: error})
  }
})

module.exports = router;
