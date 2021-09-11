import { useRef } from "react";
import { useState } from "react/cjs/react.development";

const FormDaftar = () => {
  const dataForm = {
    nama: "",
    email: "",
    noHandphone: "",
    backEnd: "",
    frontEnd: "",
    fullStack: "",
    harapan: "",
  };
  const baseError = {
    nama: "Nama hanya berupa huruf",
    noHandphone: "No HPPP",
    backEnd: "",
    frontEnd: "",
    fullStack: "",
    harapan: "",
  }
  const [data, setData] = useState(dataForm);
  const [deskripsi, setDeskripsi] = useState('')

  const suratKesungguhan = useRef(null)
  const [latarPendidikan, setLatarPendidikan]= useState('')
  const [pilihanKelas, setpilihanKelas]= useState('')
  const [error, setError] = useState('')

  const regex = /^[a-zA-Z]+$/;
  const regexNum = /^.{9,14}$/



  const handleInput = e => {
      const name = e.target.name;
      const value = e.target.value;

      if (name == "nama") {
          if (regex.test(value)) {
              setError("")
          } else {
              setError(baseError.nama)
          }
      } else if (name == "noHanphone") {
          if(regexNum.test(value)) {
              setError("")
          }else {
              setError(baseError.noHandphone)
          }
      }

      setData({
          ...data,
          [name] : value
      })

  }
  const resetData = () => {
      setData(dataForm);
      setError('');
  }
  const handleSubmit = (event) => {
      if (error !== "") {
          alert("Data yang anda masukkan tidak sesuai")
      } else {
          alert(`Data dari " ${data.nama} berhasil diinput`)
      }
      event.preventDefault();

  }

  return (
    <>
      <div className="container px-5 mb-5 mt-5">
        <h1 className="text-center">Pendaftaran Peserta Coding Bootcamp</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput">Nama Lengkap</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Masukkan nama anda..."
              name="nama"
              onChange={handleInput}
              value={data.nama}
              required
            />
            <p className="text-danger">{error}</p>
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">Email</label>
            <input
              type="email"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Masukkan email anda..."
              name="email"
              onChange={handleInput}
              value={data.email}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="formGroupExampleInput2">No Handphone</label>
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput2"
              placeholder="Masukkan Nomor HP anda..."
              name="noHandphone"
              onChange={handleInput}
              value={data.noHandphone}
              required
            />
          </div>
          <div>
            <label htmlFor="formGroupExampleInput2" >
              Latar Belakang Pendidikan
            </label>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio1"
                name="customRadio"
                className="custom-control-input"
                onChange={handleInput}
                value={data.backIT}
                required
              />
              <label
                className="custom-control-label"
                htmlFor="customRadio1"
                name="backIT"
              >
                IT
              </label>
            </div>
            <div className="custom-control custom-radio">
              <input
                type="radio"
                id="customRadio2"
                name="customRadio"
                className="custom-control-input"
              />
              <label
                className="custom-control-label"
                htmlFor="customRadio2"
                name="backNoIT"
                value={data.backNonIT}

              >
                Non IT
              </label>
            </div>
            <label
              className="custom-control-label"
              htmlFor="pilKelas"
              name="pilihanKelas"
            >
              Pilihan Kelas
            </label>
            <select
              class="form-select"
              id="pilKelas"
              aria-label="Default select example"
              value={pilihanKelas}
              onChange={e => setpilihanKelas(e.target.value)}
              required
            >
              <option value="" selected>
                Pilih salah satu program
              </option>
              <option value="backEnd">
                Coding Backend with Golang
              </option>
              <option value="frontEnd">Coding Frontend with ReactJS</option>
              <option value="fullStack">Fullstack Developer</option>
            </select>
            <div>
              <label className="form-label" htmlFor="customFile">
                Foto Surat Kesungguhan
              </label>
              <input type="file" className="form-control" id="customFile" refs={suratKesungguhan}  required/>
            </div>
            <div className="mb-3">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Harapan Untuk Bootcamp
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                value={deskripsi}
                onChange={e=> setDeskripsi(e.target.value)}
                name="harapan"
                required
              />
            </div>
          </div>
          <div className="container">

          </div>
          <input type="submit"  value="Submit" className="btn btn-primary"/>
          <button type="submit" onClick={resetData} class="btn btn-danger mx-2">
            Reset
          </button>
        </form>
      </div>
    </>
  );
};

export default FormDaftar;
