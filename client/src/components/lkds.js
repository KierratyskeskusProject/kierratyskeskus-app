
    switch (true) {
        case input.name==='condition':
            return {
                <StarRating
                    rating={conditionRating}
                    numberOfStars={3}
                    starRatedColor="green"
                    starHoverColor="green"
                    changeRating={changeConditionRating}
                />
            };
        case input.name ==='category':
            return{
                <CategoryReactSelect />
            };
        case input.name ==='weight':
            return {
            <input
                {...input}
                type="text"
                className={`form-control ${meta.touched && meta.error ? 'is-invalid' : ''}`}
                value={input.name === 'weight' ? actualValue : undefined}
            />
            <UpdateWeightButton />
            };
        case input.name ==='description':
            return{
            <textarea
                className={`form-control ${meta.touched && meta.error ? 'is-invalid' : ''}`}
                rows="5"
                {...input}
            />
            };
        default:
            return {
            <input
                {...input}
                type="text"
                className={`form-control ${meta.touched && meta.error ? 'is-invalid' : ''}`}
            />
            }
};