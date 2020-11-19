var colors = [
  '#16a085',
  '#27ae60',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

var quote = '';
var author = '';

//function to get the quotes from an external source, as and parse each item into quotesData.quotes
function getQuotes() {
  //using ajax and a success function to return every quote object and console.log them
  return $.ajax({
    headers: {
      Accept: 'application/json'
    },
    url:
      'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
    success: function (jsonQuotes) {
      if (typeof jsonQuotes === 'string') {
        quotesData = JSON.parse(jsonQuotes);
        console.log('quotesData');
        console.log(quotesData);
      }
    }
  });
}

//choosing a random quote from our list of quotsData.quotes
function getRandomQuote() {
  var index = Math.floor(Math.random() * quotesData.quotes.length);
  return quotesData.quotes[index];
}

function getQuote() {
  let randomQuote = getRandomQuote();

  quote = randomQuote.quote;
  author = randomQuote.author;
  
  
//make it possible to tweet the exact quote and author to your twitter account
  $('#tweet-quote').attr(
    'href',
    'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
      encodeURIComponent('"' + quote + '" ' + author)
  );
//make it possibe to post this quote to your tumblr account
  $('#tumblr-quote').attr(
    'href',
    'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
      encodeURIComponent(author) +
      '&content=' +
      encodeURIComponent(quote) +
      '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
  );

 //change and animate the quote text element
  $('.quote-text').animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#text').text(randomQuote.quote);
  });

  //change and animate the author text and color
  $('.quote-author').animate({ opacity: 0 }, 500, function () {
    $(this).animate({ opacity: 1 }, 500);
    $('#author').html(randomQuote.author);
  });

  var color = Math.floor(Math.random() * colors.length);
  
  //animate the background to change color with the button beig pressed
  $('main').animate(
    {
      backgroundColor: colors[color],
      color: colors[color]
    },
    1000
  );
  
  $('.button-text').animate(
    {
      color: colors[color]
    },
    1000
  );
}

$(document).ready(function () {
  getQuotes().then(() => {
    getQuote();
  });

  $('#new-quote').on('click', getQuote);
});