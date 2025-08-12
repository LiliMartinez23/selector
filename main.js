// Select radio btns and boxes
const radios = document.querySelectorAll( 'input[ name="group1" ]' );
const boxes = document.querySelectorAll( '.box' );
const radioContainers = document.querySelectorAll( '.radio' );

// Function to show only selected box
function showBox( selectedId ) {
    boxes.forEach( ( box, index ) => {
        if ( index === selectedId ) {
            box.hidden = false; // show box
            box.classList.add( 'active' );
            box.classList.remove( 'slide-up' );
            void box.offsetWidth;
            box.classList.add( 'slide-up' );
        } else {
            box.hidden = true; // hide box
            box.classList.remove( 'active', 'slide-up' );
        }
    });

    // Active radio & box
    radioContainers.forEach( ( container, index ) => {
        if ( index === selectedId ) {
            container.classList.add( 'active-radio' );
        } else {
            container.classList.remove( 'active-radio' );
        }
    });
}

// Change event to each radio
radios.forEach( ( radio, index ) => {
    radio.addEventListener( 'change', () => {
        showBox( index );
    });
});

showBox( 0 );