const sketch = (p) => {
  const cw = 400
  const ch = 400

  p.setup = () => {
    const canvas = p.createCanvas(cw, ch)
    canvas.parent('canvas-container')
  }

  p.draw = () => {
    p.background(30)
    p.fill(255, 100, 100)
    p.noStroke()
    p.circle(p.mouseX, p.mouseY, 50)
  }
}

export default sketch