import Login from "../../../support/PomAssignment/LoginPageAssignment.cy";
import link from "../../../support/PomAssignment/Link.cy";

describe('',()=>{
  const login1=new Login();
  const link1=new link();
  it('',()=>{
    login1.url();
    login1. username();
  })
  it('',()=>{
    login1.url();
    login1.password();
  })
  it('',()=>{
    login1.url();
    login1. submit();
  })
})