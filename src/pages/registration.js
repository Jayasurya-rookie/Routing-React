import React from "react";

export default function Registration() {
  return (
    <div>
      <h1>Registration Form</h1>

      <form action="register" method="POST">
        <label>Username:</label><br />
        <input type="text" name="username" required /><br/><br/>

        <label>Email:</label><br/>
        <input type="email" name="email" /><br/><br/>

        <label>Password:</label><br/>
        <input type="password" name="password" /><br/><br/>

        <label>Gender:</label><br/>
        Male<input type="radio" value="male" name="gender" />
        Female<input type="radio" value="female" name="gender"/>
        Other<input type="radio" value="other" name="gender" /><br/><br/>

        <label>Role:</label><br/>
        Admin<input type="radio" name="role" value="admin" />
        Customer<input type="radio" name="role" value="customer" /><br/><br/>

        <label>Address:</label><br/>
        <textarea name="address"></textarea><br/><br/>

        <input type="submit" value="SUBMIT" />
      </form>
    </div>
  );
}
