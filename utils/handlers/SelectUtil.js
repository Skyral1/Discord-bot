const { promisify } = require("util");
const { glob } = require("glob");
const pGlob = promisify(glob);

module.exports = async (client) => {
  (await pGlob(`${process.cwd()}/selects/*/*.js`)).map(
    async (selectMenuFile) => {
      const selectMenu = require(selectMenuFile);

      if (!selectMenu.name)
        return console.log(
          `-----\nSelectMenu non fonctionnel: ajouter un nom à votre menu \nFichier ->${selectMenuFile}\n-----`
        );

      client.selects.set(selectMenu.name, selectMenu);
    }
  );
};
