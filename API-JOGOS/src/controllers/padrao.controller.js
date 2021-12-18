


module.exports = {

  get : (req, res) => {

    res.status(200).send({
      "author" : "Teste Lu",
      "description" : "Api feita para um site de jogos"
    });
  }
}

