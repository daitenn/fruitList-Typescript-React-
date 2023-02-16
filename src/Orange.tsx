
export const Orange = ():JSX.Element => {
  return (
    <div className="card" style={{width: 18 + 'rem'}}>
        <img
          src="https://illustimage.com/photo/481.png"
          className="card-img-top"
          alt="picture"
        />
      <div className="card-body">
        <h5 className="card-title">Orange</h5>
        <p className="card-text">Calorie : 46kcal / 100g</p>
        <p className="card-text">Macro : P 11.8g F 0.1g C 0.9g</p>
      </div>
    </div>
  );
};
