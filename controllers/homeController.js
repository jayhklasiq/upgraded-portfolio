const Page = {};

Page.homepage = (req, res) => {
  res.render('index', { title: "Home" });
}

Page.portfolio = (req, res) => {
  res.render('pages/portfolio', { title: 'Portfolio' })
}

Page.cv = (req, res) => {
  res.render('pages/cv', { title: 'CV' })
}

module.exports = Page