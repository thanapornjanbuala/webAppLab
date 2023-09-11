document.addEventListener('DOMContentLoaded', function () {
    const generateBtn = document.getElementById('generateBtn');
    const storyContainer = document.getElementById('story');
  
    generateBtn.addEventListener('click', function () {
      const noun = document.getElementById('noun').value;
      const adjective = document.getElementById('adjective').value;
      const verb = document.getElementById('verb').value;
  
      const story = `Once upon a time, there was a ${adjective} ${noun} that loved to ${verb}. The end.`;
      
      storyContainer.textContent = 'Generated Story :'+story;
    });
  });
  