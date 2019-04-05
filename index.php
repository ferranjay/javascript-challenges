<!DOCTYPE html>
<html lang="en">
        

<head>
        <meta charset="utf-8" />
        <title> JS | Challenge</title>
        <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0" />
        <link href="styles/main.css" type="text/css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Abel|Raleway" rel="stylesheet">
        <!--[if lt IE 9]>
		<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->
        <script type='text/javascript' src='scripts/respond.min.js'></script>
</head>

<body>

        <div id="wrapper">

                <header>

                        <nav id="skipTo">
                                <ul>
                                        <li>
                                                <a href="#main" title="Skip to Main Content">Skip to Main Content</a>
                                        </li>
                                </ul>
                        </nav>

                        <h1>JS CHALLENGE</h1>

                        <nav>
                                <ul>
                                        <li><a href="#" title="Home">Home</a></li>
                                        <li><a href="#main" title="About">About</a></li>
                                        <li><a href="#cardholder" title="Work">Projects</a></li>
                                        <li><a href="#" title="Contact">Contact</a></li>
                                </ul>
                        </nav>

                        <div id="banner">
                                <img src="images/background3.jpg" alt="banner" />
                        </div>

                </header>

                <section id="main">
                        <h3>INTRO</h3>
                        <p>"JS Challenge" short for "Javascript Challenges" functions as a collective of projects made with Javascript.  It has been made 
                        for training purposes only with the intention of learning by doing.  The key is to challenge myself with coding a new project every now and then.
                        Along the way of programming I will add more and more projects to this website, 
                        loading them in via a database.
                        </p>
                </section>

                <aside>
                        <h3>ELEMENTS</h3>
                        <p>The projects which have been made vary in difficulty and are stand alone elements.  
                        This so I am able to make a reference in the future when I need a certain element. </p>
                </aside>

                <section id="cardholder">
                                <h3>PROJECTS</h3>
                                <p>Below are the projects that I have coded. They are loaded onto the website via the database "phpmyadmin".
                                </p>
                                <!-- <h1>titel</h1><h2>language</h2> -->

                                <?php include "getInfo.php"?> 

                                
                 </section>

                <section id="parrallax">
                                <img src="images/background3.jpg" alt="parrallax"/>
                </section>

                <section id="footer">  
                <p>2019 &copy; JS Challenge by Ferran Arnoldus<p>           
                </section>

        </div>

</body>

</html>