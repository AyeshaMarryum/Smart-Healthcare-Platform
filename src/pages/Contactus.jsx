import { useForm } from "react-hook-form";

const Contactus = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    // console.log(data);
    alert("Message sent!");
    reset();
  };
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-16 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-5 text-gray-900 tracking-tight">
            Contact Us
          </h1>
          <div className="text-center mb-5 flex justify-between">
            <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
              Our specialized medical team is available 24/7 to assist you. Find
              our location or send us a message below.
            </p>

            {/* <div className="flex">
          <div className="flex flex-col items-center gap-4 bg-red-50 border border-red-200 rounded-4xl px-8 py-5 shadow-sm">
            <span className="text-red-700 font-bold text-xl">
              EMERGENCY 24/7
            </span>
            <span className="text-red-600 text-2xl font-semibold tracking-wide">
              * 911 or (555) 000-9999
            </span>
          </div>
        </div> */}
          </div>

          <div className="grid md:grid-cols-2 gap-10 lg:gap-12">
            <div className="space-y-8">
              <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-white">
                <div className="aspect-video">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.9147703055!2d-74.119763973046!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2s!4v1680000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="SmartHospital Location"
                  ></iframe>
                </div>
                <div className="p-5 bg-white">
                  <p className="font-semibold text-gray-900">
                    SmartHospital Main Campus
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Open 24/7 <span className="font-bold">•</span> Emergency
                    Entry
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Main Campus
                      </h3>
                      <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                        123 Healthcare Plaza, Medical District
                        <br />
                        New York, NY 10001, United States
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-3">
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        Operating Hours
                      </h3>
                      <p className="text-sm text-gray-600 mt-2 space-y-1 leading-relaxed">
                        <span className="block">
                          Emergency:{" "}
                          <strong className="text-blue-600">24/7</strong>
                        </span>
                        <span className="block">Outpatient: 8AM - 8PM</span>
                        <span className="block">
                          Visiting Hours: 10AM - 6PM
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===========================Form=========================== */}

            <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-200 shadow-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
                Send a Message
              </h2>

              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jane Smith"
                    {...register("fullName", {
                      required: "Full name is required",
                    })}
                    className={`w-full px-5 py-3.5 rounded-lg border ${
                      errors.fullName ? "border-red-500" : "border-gray-300"
                    } focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200`}
                  />
                  {errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.fullName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="jane@example.com"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Invalid email address",
                      },
                    })}
                    className={`w-full px-5 py-3.5 rounded-lg border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200`}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Department
                  </label>
                  <select
                    {...register("department", {
                      required: "Please select a department",
                    })}
                    className={`w-full px-5 py-3.5 rounded-lg border ${
                      errors.department ? "border-red-500" : "border-gray-300"
                    } focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none bg-white transition-all duration-200`}
                  >
                    <option value="">Select Department</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Appointment">Appointment</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.department && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.department.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="How can we help you today?"
                    {...register("message", {
                      required: "Message cannot be empty",
                    })}
                    className={`w-full px-5 py-3.5 rounded-lg border ${
                      errors.message ? "border-red-500" : "border-gray-300"
                    } focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200 resize-none`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg py-4 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
