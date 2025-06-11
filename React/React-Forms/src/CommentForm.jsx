import { useFormik } from 'formik';

const validate = values => {
    const error = {};
    if (!values.username) {
        error.username = "User can't be empty";
    }
    return error;
};

export default function Comment() {
    const formik = useFormik({
        initialValues: {
            username: "",
            remark: "",
            rating: 5,
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <div>
            <h4>Give me a comment....</h4>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username : </label>
                <input
                    type="text"
                    placeholder="Username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    id="username"
                    name="username"
                />
                {formik.errors.username && <div style={{color: 'red'}}>{formik.errors.username}</div>}

                <br /><br />

                <label htmlFor="remark">Remarks : </label>
                <textarea
                    placeholder="Remarks"
                    value={formik.values.remark}
                    onChange={formik.handleChange}
                    id="remark"
                    name="remark"
                />
                <br /><br />

                <label htmlFor="rating">Rating : </label>
                <input
                    type="number"
                    placeholder="Rating"
                    min={1}
                    max={5}
                    value={formik.values.rating}
                    onChange={formik.handleChange}
                    id="rating"
                    name="rating"
                />
                <br /><br />

                <button type="submit">Add a comment</button>
            </form>
        </div>
    );
}
