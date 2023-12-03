function Contact(){
    return (
        <section id="Contact">
    <h1>Contact</h1>
    <form action="/action_page.php">
      <label htmlFor="fname">First name:</label><br />
      <input type="text" id="fname" name="fname" defaultValue /><br />
      <label htmlFor="lname">Last name:</label><br />
      <input type="text" id="lname" name="lname" defaultValue /><br /><br />
      <input type="submit" defaultValue="Submit" />
      <p>You can also reach me at 13rstuart7@gmail.com</p>
    </form> 
  </section>
    )
}

export default Contact