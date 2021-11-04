/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group ( () => {
  Route.get('/', async () => {
     return { hello: 'world' }
  })

  Route.post('auth/login', 'AuthController.login');

  Route.group(() => {
    
     Route.get('aluno/:id' ,'AlunosController.alunos')

     Route.get('aula/:id' ,'AulasController.aulas')

     Route.get('prova/:id' ,'ProvasController.provas')

     Route.get('menu/:id' ,'InformativosController.informativos')
     Route.get('geral' ,'InformativosController.geral')

     Route.get('nota/:id', 'NotasController.notas')

     Route.get('materia/:id' ,'DisciplinasController.disciplinas')

     Route.get('disciplina/:id' ,'DisciplinasCursadasController.disciplinascursadas')

     Route.get('trabalho/:id' ,'TrabalhosController.trabalhos')

  })

}).prefix('api') 