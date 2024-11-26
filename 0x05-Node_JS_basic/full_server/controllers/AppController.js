// app controller
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

// app controller export
module.exports = AppController;
