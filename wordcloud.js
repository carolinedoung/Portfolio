const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'Développement web', '', 'UI/UX Design',
    'Python', 'Photographie', 'Vidéo',
    'GSAP', 'Node.js', 'D3.js',
    'PHP', 'MySQL', 'Web design',
];

var tagCloud = TagCloud('.wordcloud', myTags,{


  radius: 250,

  maxSpeed: 'fast',
  initSpeed: 'fast',

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,
  
  // interact with cursor move on mouse out
  keep: true
  
});

//To change the color of text randomly
var colors = ['#34A853', '#FBBC05', '#4285F4', '#7FBC00', 'FFBA01', '#2F2BDF'];
var random_color = colors[Math.floor(Math.random() * colors.length)];
document.querySelector('.content').style.color = random_color;