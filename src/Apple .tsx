export const Apple = (): JSX.Element => {
  return (
    <div className="card" style={{width: 18 + 'rem'}}>
        <img
          src="https://tsukatte.com/wp-content/uploads/2019/01/apple.png"
          className="card-img-top"
          alt="picture"
        />
      <div className="card-body">
        <h5 className="card-title">Apple</h5>
        <p className="card-text">Calorie : 57kcal / 100g</p>
        <p className="card-text">Macro : P 15.5g F 0.2g C 0.1g</p>
      </div>
    </div>
  )
}
