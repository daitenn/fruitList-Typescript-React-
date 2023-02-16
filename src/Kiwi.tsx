
export const Kiwi = ():JSX.Element => {
  return (
    <div className="card" style={{width: 18 + 'rem'}}>
        <img
          src="https://food-foto.jp/img/category_tn_189.jpg"
          className="card-img-top"
          alt="picture"
        />
      <div className="card-body">
        <h5 className="card-title">Kiwi</h5>
        <p className="card-text">Calorie : 53kcal / 100g</p>
        <p className="card-text">Macro : P 13.5g F 0.1g C 1.0g</p>
      </div>
    </div>
  );
};
