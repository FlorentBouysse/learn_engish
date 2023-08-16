<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learn English</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
    <div class="wrapper">
        <header>
            <h1>LEARN ENGLISH !</h1>
            <nav>
                <a href="#">Home</a>
                <a href="#">Game</a>
            </nav>
        </header>
        <main>
            <h2>Guess the word</h2>
            <button class="play">Play / Commencer</button>
            <div class="display" style="display:none" >
                <h3>To <span class="recovers__word"></span></h3>
                <form>
                   <input type="text" name="answer">
                    <button class="btn__validate">Validate</button> 
                </form>
                
            </div>
            <section class="container__answer">
                <!-- <article class="answer__article">
                    <h3 class="answer__title"></h3>
                    <p class="answer__definition"></p>
                    <p class="answer__example"></p> -->

                </article>
            </section>
        </main>
        <footer>
            <p>DevCode@2023</p>
        </footer>
    </div>


    <script src="../js/play.js"></script>
    <script src="../js/language.js"></script>
</body>
</html>