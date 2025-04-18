/* smooth scroll to #more */
document.getElementById('exploreBtn').onclick=()=>{
    document.getElementById('more')
            .scrollIntoView({behavior:'smooth'});
  };
  
  /* interactive tilt */
  const beam = document.getElementById('beam');
  const maxTilt = 8;  // degrees
  document.querySelector('.balanceBox').addEventListener('mousemove',e=>{
    const rect=e.currentTarget.getBoundingClientRect();
    const x   =(e.clientX-rect.left)/rect.width - .5;
    beam.style.transform=`rotate(${x*maxTilt}deg)`;
  });
  document.querySelector('.balanceBox')
          .addEventListener('mouseleave',()=>beam.style.transform='rotate(0deg)');