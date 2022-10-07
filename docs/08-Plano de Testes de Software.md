# Plano de Testes de Software

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>

|  CASO DE TESTE |    CT-01 – Acesso ao cadastro    |
|     :---:             |     :---:                                              |
| Requisito Associado   | RF-01 A aplicação deve permitir que o usuário gerencie o perfil, tais como criar, excluir e editar. |
|    Objetivo do Teste  | Verificar se o cadastro está funcionando corretamente  |
|    Passos do Teste    | 1. Acessar o aplicativo, 2. Visualizar a página principal, 3. Acessar as configurações de login/cadastro. |
|    Critérios de Êxito | Deve ser permitido o preenchimento de todos os campos do cadastro. Ao clicar em “Cadastre-se”, ser redirecionado à página principal com usuário já logado.      |

|  CASO DE TESTE |    CT-02 – Login Usuário    |
|     :---:             |     :---:                                              |
|    Objetivo do Teste  | Verificar se o login funciona corretamente  |
|    Passos do Teste    | 1. Acessar o aplicativo, 2. Visualizar a página principal, 3. Acessar as configurações de login/cadastro. |
|    Critérios de Êxito | Permitir o preenchimento de todos os campos do login. Ao clicar em “Entrar”, ser redirecionado para a tela principal com usuário já logado.    |

|  CASO DE TESTE |    CT-03 – Pesquisa de edereço  |
|     :---:             |     :---:                                              |
| Requisito Associado   | RF-02 A aplicação deve permitir ao usuário pesquisar endereços. |
|    Objetivo do Teste  | Verificar se a pesquisa funciona corretamente e direciona para a localização correta, as vagas disponiveis e se são pagas ou não.  |
|    Passos do Teste    | 1. Acessar o aplicativo, 2. Visualizar a página principal, 3. Acessar a barra de pesquisa na parte superior, 4. informar endereço desejado.     |
|    Critérios de Êxito | Permitir a pesquisa de endereço, mostrar localacidade do endereço pesquisado.   |

|  CASO DE TESTE |    CT-04 – Informar local parado    |
|     :---:             |     :---:                                              |
| Requisito Associado   | RF-03 A aplicação deve permitir que o usuário informe de onde parou, localização. |
|    Objetivo do Teste  | Verificar se é redirecionado para a página de informação de vaga e permitir o selecionar todos os comandos.  |
|    Passos do Teste    | 1. Acessar o aplicativo, 2. Visualizar a página principal, 3. Selecionar P, 4. Clicar em estacionar. |
|    Critérios de Êxito | Ao selecionar P, deve abrir tela de informação des vagas na localização, permitir selecionar estacionar, na tela principal o P deve aparecer em amarelo.   |

|  CASO DE TESTE |    CT-05 – Informar saida da vaga  |
|     :---:             |     :---:                                              |
|  Requisito Associado  | RF-03 A aplicação deve permitir que o usuário informe que a vaga esta livre |
|    Objetivo do Teste  | Verificar se é redirecionado para a página de informação de vaga e permitir o selecionar todos os comandos.  |
|    Passos do Teste    | 1. Acessar o aplicativo, 2. Visualizar a página principal, 3. Selecionar P, 4. Clicar em liberar.     |
|    Critérios de Êxito | Ao selecionar P, deve abrir tela de informação des vagas na localização, permitir selecionar liberar, na tela principal o P deve aparecer em branco. |

|  CASO DE TESTE |    CT-06 – Não há vagas  |
|     :---:             |     :---:                                              |
|  Requisito Associado  | RF-03 A aplicação deve permitir que o usuário vizualize se há vagas disponiveis |
|    Objetivo do Teste  | Verificar se é redirecionado para a página de informação de vaga.  |
|    Passos do Teste    | 1. Acessar o aplicativo, 2. Visualizar a página principal, 3. Acessar a barra de pesquisa na parte superior, 4. informar endereço desejado.     |
|    Critérios de Êxito | Ao visualizar localização na tela principal o P deve aparecer em vermelho. |


|  CASO DE TESTE |    CT-07 – Adcionar novo de vaga   |
|     :---:             |     :---:                                              |
|  Requisito Associado  | RF-04 A aplicação deve permitir o usuário possa cadastrar novo local de vagas |
|    Objetivo do Teste  | Verificar se é redirecionado para a página de formulário para cadastro de novas vagas.  |
|    Passos do Teste    | 1. Acessar o aplicativo, 2. Visualizar a página principal, 3. acessar configuração usuario, 4. selecionar nova vaga, 5. preencher formulario.   |
|    Critérios de Êxito | Deve ser permitido o preenchimento de todos os campos do formulario de nova vaga. Ao clicar em “Cadastre-se” novo P deve aparecer na localizão informada. |
