class Login{
  url(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  }
  username(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]').type('username')
  }
  password(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         cy.get('[name="password"]').type('admin123')
  }
  submit(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
         cy.get('[type="submit"]').click()

  }
}
export default Login