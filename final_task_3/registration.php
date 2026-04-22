<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Unknown Company</title>
</head>
<body>
    <header>
        <div style="display: flex; justify-content: space-between;border: 2px solid black; padding:20px">
            <div>
                <h1>  Unknown Company  </h1> 
            </div>
            <div>
                <ul style="display: flex; gap: 30px; list-style-type: none;">
                    <li><a href="home.php">Home</a></li>
                    <li><a href="login.php">Login</a></li>
                    <li><a href="registration.php">Register</a></li>
                </ul>
            </div>
        </div>
    </header>
    <main style = "border: 2px solid black; padding:20px;">
        <form>
            <fieldset>
                <legend>Registration</legend>
                <label for="name">Name</label>
                <input type="text" name="name" id="name"> <br><br>
                <label for="email">Email</label>
                <input type="text" name="email" id="email"> <br><br>
                <label for="password">Password</label>
                <input type="password" name="password" id="password"><br><br>
                <label for="password">Confirm Password</label>
                <input type="password" name="password" id="password"><br><br>

                <fieldset>
                    <legend>Gender</legend>
                    <input type="radio" name="male" id="male">
                    <label for="male">Male</label>
                    <input type="radio" name="female" id="female">
                    <label for="female">Female</label>
                    <input type="radio" name="other" id="other">
                    <label for="other">Other</label>
                </fieldset>
                <fieldset>
                    <legend>Date of Birth</legend>
                    <input type="number" name="dd" id="dd"> / 
                    <input type="number" name="dd" id="dd"> / 
                    <input type="number" name="dd" id="dd"> dd/mm/yyyy 
                </fieldset>
                <div>
                    <button type="submit">Submit</button>
                    <button type="reset">Reset</button>
                </div>
            </fieldset>
        </form>
    </main>
    <footer style = "border: 2px solid black; padding:20px">
        <p style="text-align : center;">copyright @2026</p>
    </footer>
</body>
</html>