<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Learn English</title>
</head>
<body>
    <div class="wrapper">
        <header>
            <h1>LEARN ENGLISH !</h1>
        </header>
        <main>
            <h2>Guess the word or the sentence</h2>
            <button class="play">Play / Commencer</button>
            <div class="display" style="display:none" >
                <h3 class="recovers__word"></h3>
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
            DevCode@2023
        </footer>
    </div>


    <script src="../js/play.js"></script>
    <script src="../js/language.js"></script>
</body>
</html>