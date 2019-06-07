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

/* eslint-disable no-var,newline-before-return */
var loadMoreButtonSelector = '[aria-label="Load more comments"]'
var loadingSvgSelector = 'article svg'
var commentSelector = 'body > span#react-root > section > main article li h3 + span'
var userNameSelector = 'body > span#react-root > section > main article li h3'

var errorStyle = 'background: red; color: white; font-size: x-large'
var infoStyle = 'background: green; color: white; font-size: x-large'
var successStyle = 'background: #ffd052; color: black; font-size: x-large'

var counter = '-'
var urlSinglePost = /(com\/p\/.*)/
var { log } = console
// var { clear } = console

var reset = ( name ) => {
  clearInterval( name )
  // clear()
}

var loadingSpinner = () => {
  counter==='-'?counter='/':counter==='/'?counter='- ':counter==='- '?counter='\\':counter==='\\'&&( counter='-' )
  log( `Loading... ${counter}` )
}

var interval = setInterval( () => {
  const articleLength = document.querySelectorAll( 'article' ).length
  const commentLength = document.querySelectorAll( userNameSelector ).length
  const button = document.querySelector( loadMoreButtonSelector )
  const loadingSvg = document.querySelectorAll( loadingSvgSelector )
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
  } else if ( window.innerWidth < 736 ) {
    reset( interval )
    return log( '%cSo this is a weird quirk you\'ve somehow found. The comments aren\'t visible at this screen width. Make your browser window a little bigger and try again.', infoStyle )
  } /* else if ( button ) {
    clear() // super cool loading spinner, dont judge me
    loadingSpinner()
    return button.click()
  } else if ( loadingSvg.length ) {
    clear()
    loadingSpinner()
    return
  } */ else {
    reset( interval )
    return isolateComments( [ ...document.querySelectorAll( commentSelector ) ] )
  }
}, 250 )

var isolateComments = ( peopleList ) => {
  let comments = []
  peopleList.map( x => {
    comments.push( x.innerText )
  })
  return comments.length ? getCommentNumbers( comments ) : makeFunOfScriptRunner()
}

var randVideo = () => {

  const items = [
    'https://youtu.be/31j4DIpgY9U', // ghostmane mercury
    'https://youtu.be/vXXHISsnQl4', // lary's barleywine
    'https://youtu.be/kCaf9rWYmAg', // bilmuri there
    'https://youtu.be/CEVXcP3VC3Y', // tyler igors theme
    'https://youtu.be/9AXXSa8YEic', // the decline (live)
    'https://youtu.be/LYWpFs8Na9k', // badcop womanarchist
    'https://youtu.be/urt88eX5yXo?t=1859', // earth crisis (live)
    'https://youtu.be/bN0ciI2Fibo' // earth crisis (punk mba)
  ]
  return items[~~( items.length * Math.random() )]
}

var makeFunOfScriptRunner = () => {
  log( '%cSeriously?', errorStyle )
  log( '%cThere are clearly no comments.', errorStyle )
  return log( `%c${randVideo()}`, 'font-size: x-large' )
}

// var pickWinner = ( people, totalComments ) => {
//   // pick the winner! peow peow peeooowwww
//   const num = people.length
//   const WINNER = people[Math.floor( Math.random()*num )]
//   reset( interval )
//   log( `${totalComments - people.length} duplicate commenters removed` )
//   log( `%cAnd the randomly selected winner out of ${num} ${num === 1 ? 'entry' : 'entries'} is...\n\n${WINNER.toUpperCase()} !!!!`, successStyle )
//   log( `%chttps://www.instagram.com/${WINNER}/`, 'font-size: large' )
// }

var getCommentNumbers = ( comments ) => {

  const matrix = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    10: 0,
    '1️⃣': 0,
    '2️⃣': 0,
    '3️⃣': 0,
    '4️⃣': 0,
    '5️⃣': 0,
    '6️⃣': 0,
    '7️⃣': 0,
    '8️⃣': 0,
    '9️⃣': 0,
    '🔟': 0
  }

  console.log( comments )

  comments.map( x => {
    const firstChar = x.toLowerCase().charAt( 0 )
    const secondChar = x.toLowerCase().charAt( 1 )

    if ( firstChar === '#' ) {
      if ( Object.keys( matrix ).indexOf( secondChar ) > -1 ) {
        matrix[ secondChar ]++
      }
    } else if ( Object.keys( matrix ).indexOf( firstChar ) > -1 ) {
      matrix[ firstChar ]++
    }
    // console.log( Object.keys( matrix ).indexOf( firstChar ) )
  })

  log( comments )
  log( matrix )
}
