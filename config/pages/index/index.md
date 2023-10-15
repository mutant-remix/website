<style>
	body {
		text-align: center;
	}

	#hero {
		height: 80dvh;
		font-size: 1.5rem;
		line-height: 1.5rem;
		display: flex;
		align-items: center;
		text-align: left;
        margin-bottom: 5dvh;
        justify-content: center;
	}

	#herotext {
		display: block;
		max-width: 60vw;
	}

	#herotext h1 {
		font-size: 4rem;
		line-height: 4rem;
        margin-bottom: 1rem;
	}

	#bubble {
		background: var(--orange);
		border-radius: 35px;
		padding: 20px 65px;
	}
    
    #lists {
        display: flex;
		text-align: left;
        padding: 0 3rem;
    }

    li {
        list-style-position: initial;
    }
    
    #dos {
        list-style-image: url("/assets/green_tick.svg");
    }
    
    #donts {
        list-style-image: url("/assets/red_cross.svg");
    }

    @media (max-width: 900px) {
    #lists {
        flex-direction: column;
    }
	#hero {
        flex-direction: column-reverse;
		text-align: center;
    }

    #herotext {
        max-width: 100%
    }

    }
</style>

<div id="landing">
	<div id="hero">
		<div id="herotext">
			<h1>An emoji pack so good, you'll never want to use another.</h1>
			Mutant Remix brings a new twist to the good old emojis that have become a part of our daily conversations.</br>
            <button class="pushable" onclick="location.href='https://github.com/mutant-remix/mutant-remix/releases'">
                <span class="edge" style="background: var(--dark_orange);"></span>
                <span class="front" style="background: var(--orange);">
                Take me to the downloads!
                </span>
            </button>
		</div>
		<div id="heroimage">
			<img src="assets/Emoji_Hero.svg" alt="Emojis bursting from centre point">
		</div>
	</div>

## Express yourself in new ways.
Mutant introduces an exciting array of fresh and distinctive emojis along with various variations, offering you the
	freedom to express yourself through emojis the way you truly like.

## Simple, and just darn cute.
Mutant Remix pays homage to the good old Android blob emojis and combining the same style with the amazing-looking Mutant Standard emoji pack.

<img style="margin-left: auto; margin-right: auto;" src="assets/Emoji_Formula.svg"
		alt="Emojis bursting from centre point">

## Want it? Use it!
Mutant Remix is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License. Feel free to go crazy with it - as long as you respect the license.

<img style="width: 250px; margin-left: auto; margin-right: auto;" src="assets/Copyright.svg"
		alt="Emojis bursting from centre point">

## So, what am I allowed to do with it?
Here are a few ground rules regarding how you can use the emoji pack:

<div id="lists">
	<ul id="dos">
		<li>
			<h3>Share the emoji pack with your friends!</h3>
			<p>Share the love, share the mutants. Copy and redistribute Mutant Remix as you see fit, embracing the spirit of collaboration and creativity.</p>
		</li>
		<li>
			<h3>Make your own! (add attribution!)</h3>
			<p>You’re free to remix, transform or build upon the Mutant Remix or Mutant Standard emoji pack, as long as you follow the original Creative Commons license.</p>
		</li>
	</ul>
	<ul id="donts">
		<li>
			<h3>Use it for any commercial purposes.</h3>
			<p>You’re not allowed to sell the entirety or parts of the emoji pack or restrict anyone from using it behind a paywall.</p>
		</li>
		<li>
			<h3>Redistribute with the same license.</h3>
			<p>Mutant, and Mutant Remix by extension, are both licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.</p>
		</li>
	</ul>

</div>

<div id="bubble">

## #SaveTheBlobs
Help us to save these cute blobs! By using the Mutant Remix emoji pack, you’re not only supporting open-sourceprojects like ours, but are also helping us keep our blobby friends alive. Thank you!

</div>
</div>
