import { useState } from "react";

const RegistrationForm = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        cell: "",
        pass: "",
        gender: "",
        location: "",
    });

    const handleInputValue = (e) => {
        setInput((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
    };

    return (
        <>
            <form action="" className="reg-from mt-7 py-5">
                <div className="form-group mb-2 flex gap-3 justify-center items-center">
                    <label className="form-label w-16 text-sm" htmlFor="name">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control text-sm  -none outline-none px-4 py-2 rounded text-teal-500"
                        id="name"
                        name="name"
                        placeholder="Enter your name"
                        value={input.name}
                        onChange={handleInputValue}
                    />
                </div>
                <div className="form-group mb-2 flex gap-3 justify-center items-center">
                    <label className="w-16 form-label text-sm" htmlFor="email">
                        Email
                    </label>
                    <input
                        type="text"
                        className="form-control text-sm  -none outline-none px-4 py-2 rounded text-teal-500"
                        id="email"
                        placeholder="Enter your name"
                        name="email"
                        value={input.email}
                        onChange={handleInputValue}
                    />
                </div>
                <div className="form-group mb-2 flex gap-3 justify-center items-center">
                    <label className="w-16 form-label text-sm" htmlFor="cell">
                        Cell
                    </label>
                    <input
                        type="text"
                        className="form-control text-sm  -none outline-none px-4 py-2 rounded text-teal-500"
                        id="cell"
                        placeholder="Enter your cell"
                        name="cell"
                        value={input.cell}
                        onChange={handleInputValue}
                    />
                </div>
                <div className="form-group mb-2 flex gap-3 justify-center items-center">
                    <label className="w-16 form-label text-sm" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control text-sm  -none outline-none px-4 py-2 rounded text-teal-500"
                        id="email"
                        placeholder="Enter your Password"
                        name="pass"
                        value={input.pass}
                        onChange={handleInputValue}
                    />
                </div>
                <div className="form-group mb-2 flex gap-3 justify-center items-center">
                    <label className="w-16 form-label text-sm" htmlFor="password">
                        Gender
                    </label>
                    <div className="gender-group ml-3">
                        <label className="px-3" htmlFor="male">
                            <input
                                className="ml-4"
                                type="radio"
                                value="Male"
                                name="gender"
                                id="male"
                                onChange={handleInputValue}
                            />
                            Male
                        </label>
                        <label className="px-3" htmlFor="female">
                            <input
                                className="ml-4"
                                type="radio"
                                value="Female"
                                name="gender"
                                id="female"
                                onChange={handleInputValue}
                            />
                            female
                        </label>
                    </div>
                </div>
                <div className="form-group mb-2 flex gap-3 justify-center items-center">
                    <label className="w-16 form-label text-sm" htmlFor="location">
                        Location
                    </label>
                    <select
                        className="form-control text-sm  border-none outline-none px-6 py-2 rounded text-teal-500"
                        name="location"
                        id="location"
                        value={input.location}
                        onChange={handleInputValue}>
                        <option value="">Select Your Location</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Sylet">Sylet</option>
                        <option value="Chitagong">Chitagong</option>
                        <option value="Barishal">Barishal</option>
                    </select>
                </div>
                <button
                    className="bg-teal-500 rounded text-white transform duration-200 hover:bg-teal-700 py-2 w-full"
                    type="submit">
                    Signup
                </button>
            </form>
        </>
    );
};

export default RegistrationForm;
