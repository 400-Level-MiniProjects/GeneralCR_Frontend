//  dont touch this file!!!!!!!!!!!!
//  if you want to write js, create a js file 
class Navbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <div class="header">
                    <img src="../images/logo/logo1.png" alt="EDSU Logo" width="50.91px">
                    <p>Edo State <br> Univeristy Uzairue</p>
                </div>
                <nav class="navbar">
                    <ul>
                        <li><a href="./login.html">Login</a></li>
                        <li><a href="./signup.html">Sign Up</a></li>
                        <li><a href="./signupas.html">Sign up as</a></li>
                        <li><a href="./printcourse.html">Print courses</a></li>
                        <li><a href="./studentdetails.html">Students Details</a></li>
                        <li><a href="./advisordetails.html">Advisor Details</a></li>
                        <li><a href="./Eapproveregcourse.html">Empty Approve register courses</a></li>
                        <li><a href="./popupscreen.html">Pop up screen</a></li>
                        <li><a href="./nocarryover.html">No carry over</a></li>
                        <li><a href="./carryover.html">Carry over</a></li>
                        <li><a href="./noregcourse.html">Empty register courses</a></li>
                        <li><a href="./approvecourseforreg.html">Approve Registered courses</a></li>
                    </ul>
                </nav>
            </header>
        `
    }
}


customElements.define('app-navbar', Navbar)