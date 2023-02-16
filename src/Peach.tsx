
export const Peach = ():JSX.Element => {
  return (
    <div className="card" style={{width: 18 + 'rem'}}>
        <img
          src="https://1.bp.blogspot.com/-6HT7iIJ1Xs8/VGX8hLBmrOI/AAAAAAAApIA/W_dTS-CzgNA/s800/fruit_momo.png"
          className="card-img-top"
          alt="picture"
        />
      <div className="card-body">
        <h5 className="card-title">Peach</h5>
        <p className="card-text">Calorie : 40kcal / 100g</p>
        <p className="card-text">Macro : P 10.2g F 0.1g C 0.6g</p>
      </div>
    </div>
  );
};
