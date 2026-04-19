<?php
    $pageTitle = 'Experience';
    $cssFiles = '<link rel="stylesheet" href="css/experience-styles.css">';
    $jsFiles = '<script src="js/scroll.js"></script>';

    require_once('inc/head.inc.php');
?>
    <body>
        <?php require_once('inc/header.inc.php'); ?>

        <main>
            <h1>My experience</h1>
            
            <section>
                <h2>Work experience</h2>
                <div class="container">
                    <div class="timeline">
                        <div class="pin" data-event="crazyBowlz">2025</div>
                        <div class="pin" data-event="crazyBowlz">2022 - 2023</div>
                    </div>

                    <div class="events">
                        <div id="crazyBowlz" class="event">
                            <h3>Crazy Bowlz</h3>
                            <p>New Paltz, NY</p>
                            <p>Cashier/Food Packer/Kitchen Prep</p>
                            <p>September 2022 - July 2023, July 2025 - August 2025</p>
                            <p>Responsibilities</p>
                            <ul>
                                <li>Performed a variety of customer-focused duties and prepared ingredients to ensure the kitchen is ready for cooking</li>
                                <li>Successfully multitasked in a fast-paced environment while collaborating effectively with team members to achieve shared objectives</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            <section>
                <h2>Education</h2>
                <div class="container">
                    <div class="timeline">
                        <div class="pin" data-event="rit">2023 - Now</div>
                        <div class="pin" data-event="hhs">2019 - 2023</div>
                        <div class="pin" data-event="phs">2019</div>
                    </div>

                    <div class="events">
                        <div id="rit" class="event">
                            <h3>Rochester Institute of Technology</h3>
                            <p>Rochester, NY</p>
                            <p>Golisano College of Computing and Information Sciences</p>
                            <p>Bachelor of Science, Game Design and Development</p>
                            <p>Minor in Web Development</p>
                            <p>August 2023 - Now (Anticipated May 2027)</p>
                            <p>GPA: 4.0/4.0</p>
                            <p>Awarded Dean's List (Fall 2023, Spring 2024, and Fall 2024)</p>
                            <p>Recipient of the RIT Presidential Scholar, Academic Excellence</p>
                            <p>Relevant Courses:</p>
                            <ul>
                                <li>Real Time Stimulation Games I (Spring 2025)</li>
                                <li>Intro to Database and Data Modeling (Spring 2025)</li>
                                <li>Web & Mobile II (Spring 2025)</li>
                                <li>Experience Design Games & Media (Spring 2025)</li>
                                <li>Game Design and Development I (Spring 2025)</li>
                                <li>Rich Media Web App Dev I (Spring 2025)</li>
                                <li>Interactive Media Development (Fall 2024)</li>
                                <li>3D Animation and Asset Production (Fall 2024)</li>
                                <li>Introduction to Web Technology for Game Developers (Fall 2024)</li>
                                <li>Web & Mobile I (Fall 2024)</li>
                                <li>Game Development and Algorithmic Problem Solving (Spring 2024)</li>
                                <li>2D Animation and Asset Production (Spring 2024)</li>
                                <li>Math Graphical Simulation I (Spring 2024)</li>
                                <li>Discrete Mathematics (Fall 2023)</li>
                                <li>Problem Solving with Data Structures and Algorithms for Games (Fall 2023)</li>
                                <li>Intro to Interative Media (Fall 2023)</li>
                            </ul>
                        </div>

                        <div id="hhs" class="event">
                            <h3>Highland High School</h3>
                            <p>Highland, NY</p>
                            <p>High School Diploma (Advanced Regents Diploma)</p>
                            <p>December 2019 - June 2023</p>
                        </div>

                        <div id="phs" class="event">
                            <h3>Patuxent High School</h3>
                            <p>Lusby, MD</p>
                            <p>September 2019 - December 2019</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>

        <?php require_once('inc/footer.inc.php'); ?>