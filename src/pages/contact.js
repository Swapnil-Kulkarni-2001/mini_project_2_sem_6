import React, {useState} from 'react';

function ContactForm () {
  const [name, setName] = useState ('');
  const [age, setAge] = useState ('');
  const [rollno, setRollno] = useState ('');
  const [description, setDescription] = useState ('');
  const [technicalSkill, setTechnicalSkill] = useState ('');
  const [nonTechnicalSkill, setNonTechnicalSkill] = useState ('');
  const [email, setEmail] = useState ('');
  const [contactNumber, setContactNumber] = useState ('');
  const [image, setImage] = useState ('');

  const handleSubmit = event => {
    event.preventDefault ();
    console.log ({
      name,
      age,
      rollno,
      description,
      technicalSkill,
      nonTechnicalSkill,
      email,
      contactNumber,
      image,
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4 pt-10 pb-10">
     <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
     <form onSubmit={handleSubmit} className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:pr-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Name:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="w-full md:w-1/3 mb-4 md:pr-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="age"
            >
              Age:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className="w-full md:w-1/3 mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="rollNo"
            >
              Roll Number:
            </label>
            <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          id="rollno"
          value={rollno}
          onChange={e => setRollno (e.target.value)}
        />
          </div>

          <div className="w-full md:w-1/2 mb-4 md:pr-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="description"
            >
              Description:
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="w-full md:w-1/2 mb-4 md:pr-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="technicalSkill"
            >
              Technical Skill:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="technicalSkill"
              value={technicalSkill}
              onChange={(e) => setTechnicalSkill(e.target.value)}
            />
          </div>

          <div className="w-full md:w-1/2 mb-4 md:pl-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="nonTechnicalSkill"
            >
              Non-Technical Skill:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              id="nonTechnicalSkill"
              value={nonTechnicalSkill}
              onChange={(e) => setNonTechnicalSkill(e.target.value)}
            />
          </div>

          <div className="w-full md:w-1/2 mb-4 md:pr-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email Address:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="w-full md:w-1/2 mb-4 md:pl-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="contactNumber"
            >
              Contact Number:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="tel"
              id="contactNumber"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </div>

          <div className="w-full mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="image"
            >
              Image:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <div className="w-full mb-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
     </form>
    </div>
   </div>
  );
}

export default ContactForm;