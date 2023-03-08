import '../css/form.css'


const Form = () => {

  //Clone a Table Row
  function cloneRow(row, tbody) {
    var row = document.getElementById(row); // find row to copy
    var table = document.getElementById(tbody); // find table body tag to append to
    var clone = row.cloneNode(true); // copy children too
    clone.id = ' '; // change id or other attributes/contents to avoid duplicating of id's
    clone.classList.add("cloned");
    table.appendChild(clone) // add new row to end of table

  };

  //Remove a Cloned Table Row
  function removeRow(tableID) {
    var table = document.getElementById(tableID);
    let last = table.lastElementChild;

    if (last.classList.contains("cloned")) {
      last.remove();
    }
  };


  return (
    <>
      <main>
        <div className="container">
          <h1>Enter Details</h1>
          <form className='column'>
            <div className="form-group row">
              <label htmlFor="full-name" className="" value="John Doe">Full Name</label>
              <input defaultValue="" id="full-name" className="form-control" type="text" name="fullName" placeholder="Enter Your Name" />
            </div>
            <div className="form-group row">
              <label htmlFor="fathers-name" className="">Father's Name</label>
              <input defaultValue="" id="fathers-name" className="form-control" type="text" name="FathersName" placeholder="Your Father's Name" />
            </div>
            <div className="form-group row">
              <label className="control-label col-sm-3"> Gender</label>
                <div className="row gap-1">
                  <label htmlFor="gender-male" className="radio-inline">
                    <input id="gender-male" type="radio" name="genderRadio" value="Male" /> Male
                  </label>

                  <label htmlFor="gender-female" className="radio-inline">
                    <input id="gender-female" type="radio" name="genderRadio" value="Female" /> Female
                  </label>

                  <label htmlFor="gender-other" className="radio-inline">
                    <input id="gender-other" type="radio" name="genderRadio" value="Other" /> Other
                  </label>
                </div>

            </div>
            <div className="form-group row">
              <label htmlFor="birthDate" className="col-sm-3 control-label">Date of Birth*</label>
              <input defaultValue="" type="date" id="birthDate" name="dateOfBirth" className="form-control" />
            </div>
            <div className="form-group row">
              <label htmlFor="phoneNumber" className="col-sm-3 control-label">Phone number </label>
              <input defaultValue="" type="phoneNumber" name="phoneNumber" id="phoneNumber" placeholder="XXXXXXXXXX" className="form-control" />
            </div>
            <div className="form-group row">
              <label className="">Email</label>
              <input defaultValue="" className="form-control" name="email" type="email" placeholder="example@domain.com" />
            </div>
            <div className="form-group row">
              <label htmlFor="sel1" className="col-lg-3">Merital Status</label>
              <select className=" form-control" id="sel1" name="meritalStatus">
                <option>Unmarried</option>
                <option>Married</option>
                <option>Divorced</option>
                <option>Widowed</option>
              </select>
            </div>
            <div className="form-group row">
              <label htmlFor="sel1" className="col-lg-3">Nationality</label>
              <select className=" form-control" id="sel1" name="nationality">
                <option>Indian</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group row">
              <label className="">Languages Known</label>
              <input defaultValue="" className="form-control" name="langKnown" type="text" value="Hindi, English" />
            </div>

            <div className="form-group row">
              <label className="">Address</label>
              <div className="form-group_inputs column">
                <input defaultValue="" className="form-control" type="text" name="village" placeholder="House No. / Village" />
                <input defaultValue="" className="form-control" type="text" name="ward" placeholder="Appartment / Area / Ward" />
                <div className="row">
                  <input defaultValue="" className="form-control" type="text" name="city" placeholder="City" />
                  <input defaultValue="" className="form-control" type="number" name="pinCode" placeholder="Zip Code / Pin Code" />
                  <input defaultValue="" className="form-control" type="text" name="district" placeholder="District" />
                  <input defaultValue="" className="form-control" type="text" name="state" placeholder="State" />
                  <input defaultValue="" className="form-control" type="text" name="country" placeholder="Country" />

                </div>
              </div>
            </div>

            <div className="form-sections">
              <h3 className="">Education</h3>
            </div>
            <div className="column">
                <table className="table table-bordered" id="form-edu_table">
                  <thead>
                    <tr>
                      <th className="">
                        Certificate/Degree
                      </th>
                      <th className="">
                        Stream
                      </th>
                      <th className="">
                        Board
                      </th>
                      <th className="">
                        School / University
                      </th>
                      <th className="">
                        Marks(%)
                      </th>
                    </tr>
                  </thead>
                  <tbody id="qualiBody">
                    <tr id='addr00' data-id="0" className="hidden">
                      <td data-name="degreeDeploma[]">
                        <select name="degreeDeploma[]" className="form-control">
                          <option value="Matric">Matric</option>
                          <option value="Secondary Education">Secondary Education</option>
                          <option value="Graduation">Graduation</option>
                          <option value="Post-Graduation">Post Graduation</option>
                          <option value="Diploma">Diploma</option>
                          <option value="">Other</option>

                        </select>
                      </td>
                      <td data-name="streamSubjects[]">
                        <select name="streamSubjects[]" className="form-control">
                          <option value="">Select Option</option>
                          <option value="1">All</option>
                          <option value="2">Science</option>
                          <option value="3">Commerce</option>
                          <option value="3">Arts</option>
                          <option value="3">Hotel Management</option>
                          <option value="3">Computer Applications</option>
                          <option value="3">Financial Marketing Management</option>
                        </select>
                      </td>
                      <td data-name="board">
                        <input defaultValue="" type="text" name='board[]' placeholder='Board Name' className="form-control" />

                      </td>
                      <td data-name="university[]">
                        <input defaultValue="" type="text" name='university[]' placeholder='School/University' className="form-control" />

                      </td>

                      <td>
                        <div className="input-group">
                          <input defaultValue="" type="number" name='marks[]' placeholder='' className="form-control" min="1" max="100" />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="row align-right gap-1">
                  <button onclick="removeRow('qualiBody')" id="add_qualification" className="btn white">x
                  </button>
                  <button onclick="cloneRow('addr00', 'qualiBody')" id="add_qualification" className="btn primary">Add More
                  Qualifications</button>

                </div>
            </div>


            <div className="form-sections">
              <h3 className="">Experience</h3>
            </div>

            <div className="column">
              <table className="table table-bordered" id="tab_logic2">
                <thead>
                  <tr>
                    <th className="text-center">
                      Years of Experience
                    </th>
                    <th className="text-center">
                      Role
                    </th>
                    <th className="text-center">
                      Company
                    </th>

                  </tr>
                </thead>
                <tbody id="expBody">
                  <tr id='addr10' data-id="1" className="hidden">
                    <td data-name="yearsOfExperience[]">
                      <input defaultValue="" type="number" name='yearsOfExperience[]' placeholder='No of Years' className="form-control" />
                    </td>
                    <td data-name="experienceRole[]">
                      <input defaultValue="" type="text" name='experienceRole[]' placeholder='Role' className="form-control" />
                    </td>
                    <td data-name="experienceCompany[]">
                      <input defaultValue="" type="text" name='experienceCompany[]' placeholder='Name of Firm' className="form-control" />
                    </td>
                  </tr>

                </tbody>

              </table>
              <div className="row align-right gap-1">
                <button onclick="removeRow('expBody')" id="remove_experience" className="btn white">x
                </button>
                <button onclick="cloneRow('addr10', 'expBody')" id="add_experience" className="btn primary">Add Experience</button>

              </div>

            </div>

            <div className="form-group row gap-2">
                <input type="submit" className="btn white" name="save" value="Save" />
                <input type="submit" className="btn primary" name="submit" value="Create Resume" />
                <input type="reset" className="btn sm" value="Reset" />
            </div>
          </form>
        </div>
      </main>
    </>
  )
}

export default Form