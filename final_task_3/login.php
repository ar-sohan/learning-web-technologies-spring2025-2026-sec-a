<?php

    session_start();
    print_r($_SESSION);

?>

<html>
    <head></head>
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
                <legend>LOGIN</legend>
                <label for="username">Username</label>
                <input type="text" name="username" id="username"> <br><br>
                <label for="password">Password</label>
                <input type="password" name="password" id="password">
                <br><br>
                <input type="checkbox" name="remember" id="remember">
                <label for="remember">Remember Me</label> <br>
                <button type="submit">Submit</button>
                <a href="forgetPass.php">Forget Password</a>
            </fieldset>
        </form>
    </main>
    <footer style = "border: 2px solid black; padding:20px">
        <p style="text-align : center;">copyright @2026</p>
    </footer>
</body>
</html>