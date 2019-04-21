/**
 * This function should work for any instagram post.
 *   Use it by opening Chrome's javascript console and pasting all of this code. (see link below)
 *   https://developers.google.com/web/tools/chrome-devtools/console/
 *
 * All comments are not immediately visible. This will automatically click the "show more" button for you.
 *   It could take some time depending on how many comments there are.
 *   Just wait, it cant go any faster using this method. ( the 250 interval is for the loading spinner, dont judge me )
 *   Once all comments have been made available, it will then choose a random commenter by username.
 *
 * Math.random() creates a random number between 0 & 1
 *   Multiply that random number by how many comments exist
 *   Round that new number down using Math.floor()
 *   Return the person at position people[ randomNumber ]
 *
 * For the sticklers out there, the reason this is so convoluted is for validation and message handling.
 *   It's users aren't programmers, instructions are logged if there is an error.
 *
 */

var loadMoreButtonSelector = 'body > span#react-root > section > main article ul > li:not([role="menuitem"]) button'
var userNameSelector = 'body > span#react-root > section > main article li h3'

var errorStyle = 'background: red; color: white; font-size: x-large'
var infoStyle = 'background: green; color: white; font-size: x-large'
var successStyle = 'background: #ffd052; color: black; font-size: x-large'

var counter = '-'
var urlSinglePost = /(com\/p\/.*)/
var { log } = console
var { clear } = console

var reset = ( name ) => {
  clearInterval( name )
  clear()
}

var interval = setInterval( () => {
  const articleLength = document.querySelectorAll( 'article' ).length
  const commentLength = document.querySelectorAll( userNameSelector ).length
  const button = [ ...document.querySelectorAll( loadMoreButtonSelector ) ].find( el => { return el.textContent === 'Load more comments' || el.textContent.length !== 0 })
  const testedUrlBool = urlSinglePost.test( window.location.href )

  if ( testedUrlBool && articleLength > 1 ) {
    reset( interval )
    return log( '%cPlease reload the page to isolate the image, then re-run the script.', infoStyle )
  } else if ( testedUrlBool && commentLength === 0 ) {
    reset( interval )
    return makeFunOfScriptRunner()
  } else if ( articleLength > 1 || commentLength === 0 ) {
    reset( interval )
    log( '%cThis script only works on isolated images, please navigate directly to a single image', errorStyle )
    return log( '%cFor example:\nhttps://www.instagram.com/p/BRWAyEQjEeB/', 'font-size: x-large' )
  } else if ( button ) {
    clear() // super cool loading spinner, dont judge me
    counter==='-'?counter='/':counter==='/'?counter='- ':counter==='- '?counter='\\':counter==='\\'&&( counter='-' )
    log( `Loading... ${counter}` )
    return button.click()
  } else {
    reset( interval )
    return isolateUsernames( [ ...document.querySelectorAll( userNameSelector ) ] )
  }
}, 250 )

var isolateUsernames = ( peopleList ) => {
  let userNames = []
  peopleList.map( x => {
    if ( x.innerText !== document.querySelector( 'h2 a' ).innerText ) {
      userNames.push( x.innerText )
    }
  })
  const uniqueList = [ ...new Set( userNames ) ]
  return uniqueList.length ? pickWinner( uniqueList, userNames.length ) : makeFunOfScriptRunner()
}

var makeFunOfScriptRunner = () => {
  log( '%cSeriously?', errorStyle )
  log( '%cThere are clearly no comments.', errorStyle )
  return log( '%chttps://www.youtube.com/watch?v=vXXHISsnQl4', 'font-size: x-large' )
}

var pickWinner = ( people, totalComments ) => {
  // pick the winner! peow peow peeooowwww
  const num = people.length
  const WINNER = people[Math.floor( Math.random()*num )]
  reset( interval )
  log( `${totalComments - people.length} duplicate commenters removed` )
  log( `%cAnd the randomly selected winner out of ${num} ${num === 1 ? 'entry' : 'entries'} is...\n\n${WINNER.toUpperCase()} !!!!`, successStyle )
  log( `%chttps://www.instagram.com/${WINNER}/`, 'font-size: large' )
}
