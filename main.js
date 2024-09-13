// AI PAGE FUNCTION 
function showArt() 
{
    // Get the selected art style
    const style = document.getElementById("artStyle").value;
    console.log("Selected Style:", style); 

    // Art data: Paths to images based on style
    const artData = {
        abstract: {
            src: 'images/ai_abstract.jpeg',
            description: 'A mesmerizing abstract piece, showcasing a blend of colors and forms that challenge the traditional boundaries of art.'
        },
        landscape: {
            src: 'images/ai_landscape.jpg',
            description: 'A stunning landscape, capturing the beauty of nature through the eyes of artificial intelligence.'
        },
        portrait: {
            src: 'images/ai_portrait.jpeg',
            description: 'A portrait, demonstrating its ability to render human likeness with a unique digital twist.'
        }
    };

    // Check if the selected style is valid
    if (artData[style]) 
    
    {
        // Update the displayed image and description based on the selected style
        document.getElementById("artImage").src = artData[style].src;
        document.getElementById("artDescription").innerText = artData[style].description;

    } else 

    {
        console.error("Invalid art style selected.");
    }
}

// TOGGLE FUNCTION 
function toggleStyle() 
{
    const currentStyle = document.getElementById('theme-stylesheet');
    const isOriginal = currentStyle.getAttribute('href') === 'style.css';
    const newStyle = isOriginal ? 'alternate-style.css' : 'style.css';
    currentStyle.setAttribute('href', newStyle);
    const icon = document.getElementById('icon');
   
    
    // Change the icon based on the current style
    if (isOriginal) {
        icon.innerText = '🖌️'; //  icon for alternate style
    } else {
        icon.innerText = '🎨'; //  icon for original style
    }
    
    // Store the current style choice
    localStorage.setItem('selectedStyle', newStyle);

}

// Load the previously selected style on page load
window.onload = function() 
{
    const savedStyle = localStorage.getItem('selectedStyle');
    const currentStyle = document.getElementById('theme-stylesheet');
    const icon = document.getElementById('icon');
    
    if (savedStyle) {
        currentStyle.setAttribute('href', savedStyle);
        icon.innerText = savedStyle === 'style.css' ? '🎨' : '🖌️';
    }
};
