<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="assets/css/login.css">
  <title>LOGIN USMP</title>
</head>
<body>
    <section>
        <div class="form-box">
            <div class="form-value">
                <form>
                    <h2>Login</h2>
                    <div class="inputbox">
                        <input type="text" required name="email">
                        <label for="">Email</label>
                    </div>
                    <div class="inputbox">
                        <input type="password" required name="password">
                        <label for="">Password</label>
                    </div>
                    <!-- <div class="forget">
                        <label for=""><input type="checkbox">Remember Me  <a href="#">Forget Password</a></label>
                    </div> -->
                    <button>Login</button>
                </form>
            </div>
        </div>
    </section>
    <script>
        const form = document.querySelector('form');
        form.addEventListener('submit', event => {
            event.preventDefault();
            const formData = new FormData(form);
            fetch('admin/login.php', {
                method: 'POST',
                body: formData
            }).then(response => response.json())
            .then(data => {
                console.log(data);
                if(data.status == 'ok'){
                    window.location.href = 'admin/index.php';
                }else{
                    alert('Usuario o contraseña incorrectos');
                }
            });  
        });
    </script>
</body>
</html>