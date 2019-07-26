/* eslint-disable no-var,newline-before-return */
var removeDuplicates = true

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

var debug = false
var loadMoreButtonSelector = '[aria-label="Load more comments"]'
var loadingSvgSelector = 'article svg'
var userNameSelector = 'body > span#react-root > section > main article li h3'
var scrollContainerSelector = 'body > span#react-root > section > main article ul'

var errorStyle = 'background: red; color: white; font-size: x-large'
var infoStyle = 'background: green; color: white; font-size: x-large'
var successStyle = 'background: #ffd052; color: black; font-size: x-large'

var counter = '-'
var commentCount = 0
var prevCommentCount = 0
var loadingCount = 0
var tickCount = 0
var loadingLimitBreak = 30
var urlSinglePost = /(com\/p\/.*)/
var { log } = console
var { clear } = console

var clearConsole = () => {
  !debug ? clear() : null
}

var reset = ( name ) => {
  clearInterval( name )
  clearConsole()
}

var loadingSpinner = () => {
  counter==='-'?counter='/':counter==='/'?counter='- ':counter==='- '?counter='\\':counter==='\\'&&( counter='-' )
  log( `Comments: ${commentCount}` )
  !debug && log( `Loading... ${counter}` )
}

var interval = setInterval( () => {
  const articleLength = document.querySelectorAll( 'article' ).length
  const commentLength = document.querySelectorAll( userNameSelector ).length
  const button = document.querySelector( loadMoreButtonSelector )
  const loadingSvg = document.querySelectorAll( loadingSvgSelector )
  const testedUrlBool = urlSinglePost.test( window.location.href )
  const scrollContainer = document.querySelector( scrollContainerSelector )

  prevCommentCount = commentLength
  scrollContainer ? scrollContainer.scrollTop = scrollContainer.scrollHeight : null
  tickCount++

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
  } else if ( window.innerWidth < 736 ) {
    reset( interval )
    return log( '%cSo this is a weird quirk you\'ve somehow found. The comments aren\'t visible at this screen width. Make your browser window a little bigger and try again.', infoStyle )
  } else if ( loadingSvg.length && loadingCount < loadingLimitBreak ) {
    loadingCount++
    clearConsole()
    loadingSpinner()
    return
  } else if ( button && prevCommentCount !== commentCount ) { // check if the new comment button is stuck
    loadingCount = 0
    tickCount = 0
    clearConsole()
    loadingSpinner() // super cool loading spinner, dont judge me
    commentCount = commentLength
    return button.click()
  } else if ( debug && tickCount <= 10 ) {
    return log( 'DEBUG', {
      tickCount: tickCount,
      loadingCount: loadingCount,
      button: Boolean( button ),
      prevCommentCount: prevCommentCount,
      commentCount: commentCount,
      'button && prevCommentCount !== commentCount': button && prevCommentCount !== commentCount
    })
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
  if ( removeDuplicates ) {
    const uniqueList = [ ...new Set( userNames ) ]
    return uniqueList.length ? pickWinner( uniqueList, userNames.length ) : makeFunOfScriptRunner()
  } else {
    return userNames.length ? pickWinner( userNames, userNames.length ) : makeFunOfScriptRunner()
  }
}

var randVideo = () => {

  const items = [
    'https://youtu.be/31j4DIpgY9U', // ghostmane mercury
    'https://youtu.be/vXXHISsnQl4', // lary's barleywine
    'https://youtu.be/kCaf9rWYmAg', // bilmuri there
    'https://youtu.be/CEVXcP3VC3Y', // tyler igors theme
    'https://youtu.be/9AXXSa8YEic', // the decline (live)
    'https://youtu.be/LYWpFs8Na9k', // badcop+badcop womanarchist
    'https://youtu.be/urt88eX5yXo?t=1859', // earth crisis (live)
    'https://youtu.be/bN0ciI2Fibo?t=505' // earth crisis (punk rock mba)
  ]
  return items[~~( items.length * Math.random() )]
}

var makeFunOfScriptRunner = () => {
  log( '%cSeriously?', errorStyle )
  log( '%cThere are clearly no comments.', errorStyle )
  return log( `%c${randVideo()}`, 'font-size: x-large' )
}

var pickWinner = ( people, totalComments ) => {
  // pick the winner! peow peow peeooowwww
  const num = people.length
  const WINNER = people[Math.floor( Math.random()*num )]
  reset( interval )
  loadingCount >= loadingLimitBreak && log( '%cError: comments stopped loading properly, please review results.\n\nYou can most likely just paste the code again WITHOUT reloading.', errorStyle )
  log( `${totalComments} total comments (excludes replies, includes duplicates)` )
  log( removeDuplicates ? `${totalComments - people.length} duplicate commenters removed` : 'duplicates not removed' )
  log( `%cAnd the randomly selected winner out of ${num} ${num === 1 ? 'entry' : 'entries'} is...\n\n${WINNER.toUpperCase()} !!!!`, successStyle )
  log( `%chttps://www.instagram.com/${WINNER}/`, 'font-size: large' )
}
