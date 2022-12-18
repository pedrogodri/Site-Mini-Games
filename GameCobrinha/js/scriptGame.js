let lastRenderTime = 0;

function principal(currentTime) {
    const secondsSincelastRender = currentTime - lastRenderTime;
    requestAnimationFrame(principal)
}

requestAnimationFrame(principal)