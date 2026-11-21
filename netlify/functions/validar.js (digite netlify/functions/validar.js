mkdir -p netlify/functions && cd netlify/functions && touch validar.js && cd ../..
touch netlify.toml index.html
git init
git add .
git commit -m "Adiciona funcao de validacao"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
git push -u origin main
