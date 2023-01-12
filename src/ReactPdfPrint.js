import React, {useRef, useState} from 'react';
import { useReactToPrint } from 'react-to-print';
import './reactPdfPrint.css';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import {useDropzone} from 'react-dropzone';

const ReactPdfPrint = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [adress, setAdress] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [city, setCity] = useState('');
    const [birthday, setBirthday] = useState('');
    const [placeOfBirth, setPlaceOfBirth] = useState('');
    const [gender, setGender] = useState('');
    // skill states
    const [skill, setSkill] = useState('');
    const [skillLevel, setSkillLevel] = useState('');
    const [skillList, setSkillList] = useState([]);
    // lang states
    const [lang, setLang] = useState('');
    const [langLevel, setLangLevel] = useState('');
    const [langList, setLangList] = useState([]);
    // profile state
    const [profile, setProfile] = useState('');
    // disabled states
    const [disabledFormation, setDisabledFromation] = useState(false);
    const [disabledExperience, setDisabledExperience] = useState(false);
    const [disabledStage, setDisabledStage] = useState(false);
    // Formation states
    const [nameFormation, setNameFormation] = useState('');
    const [estaFormation, setEstaFormation] = useState('');
    const [cityFormation, setCityFormation] = useState('');
    const [startDateFormation, setStartDateFormation] = useState('');
    const [endDateFormation, setEndDateFormation] = useState('');
    const [intelNowFormation, setIntelNowFormation] = useState('ce jour');
    const [descriptionFormation, setDescriptionFormation] = useState('');
    const [formationList, setFormationList] = useState([])
    // Experience states
    const [nameExperience, setNameExperience] = useState('');
    const [estaExperience, setEstaExperience] = useState('');
    const [cityExperience, setCityExperience] = useState('');
    const [startDateExperience, setStartDateExperience] = useState('');
    const [endDateExperience, setEndDateExperience] = useState('');
    const [intelNowExperience, setIntelNowExperience] = useState('ce jour');
    const [descriptionExperience, setDescriptionExperience] = useState('');
    const [experienceList, setExperienceList] = useState([])
    // Stage states
    const [nameStage, setNameStage] = useState('');
    const [estaStage, setEstaStage] = useState('');
    const [cityStage, setCityStage] = useState('');
    const [startDateStage, setStartDateStage] = useState('');
    const [endDateStage, setEndDateStage] = useState('');
    const [intelNowStage, setIntelNowStage] = useState('ce jour');
    const [descriptionStage, setDescriptionStage] = useState('');
    const [stageList, setStageList] = useState([])
    // color
    const [color, setColor] = useState('');



    // add image 
    const [displayImage, setDisplayImage] = useState('')
    const [image, setImage] = useState([]);

    const{getRootProps, getInputProps, isDragActive} = useDropzone({
        accept : "image/*",
        onDrop: (acceptedFiles) => {
            setImage(
                acceptedFiles.map((upFile)=> Object.assign(upFile, {
                    preview: URL.createObjectURL(upFile)
                }))
            )
        }
    })

    // add Stage function

    const addStage = () => {
        if(!nameStage && !estaStage && !cityStage && !startDateStage && (!endDateStage || !intelNowStage) && descriptionStage){
            alert('add Experience')
            return
        }
        const stages = {
            id: Math.floor(Math.random() * 1000),
            name: nameStage,
            esta: estaStage,
            city: cityStage,
            startDate: startDateStage,
            endDate: endDateStage,
            intelNow: intelNowStage,
            description: descriptionStage
        }
        setStageList(oldList => [...oldList, stages])
        setNameStage('')
        setEstaStage('')
        setCityStage('')
        setStartDateStage('')
        setEndDateStage('')
        setIntelNowStage('')
        setDescriptionStage('')
    }
    // delete Stage function
    const deleteStage = (id) => {
        const newArry = stageList.filter(item => item.id !== id);
        setStageList(newArry);
    }

    //add Experience function
    const addExperiences = () => {
        if(!nameExperience && !estaExperience && !cityExperience && !startDateExperience && (!endDateExperience || !intelNowExperience) && descriptionExperience){
            alert('add Experience')
            return
        }
        const experiences = {
            id: Math.floor(Math.random() * 1000),
            name: nameExperience,
            esta: estaExperience,
            city: cityExperience,
            startDate: startDateExperience,
            endDate: endDateExperience,
            intelNow: intelNowExperience,
            description: descriptionExperience
        }
        setExperienceList(oldList => [...oldList, experiences])
        setNameExperience('')
        setEstaExperience('')
        setCityExperience('')
        setStartDateExperience('')
        setEndDateExperience('')
        setIntelNowExperience('')
        setDescriptionExperience('')
    }
    // delete Experience function
    const deleteExperiences = (id) => {
        const newArry = experienceList.filter(item => item.id !== id);
        setExperienceList(newArry);
    }

    // add Formation function
    const addFormation = () => {
        if(!nameFormation && !estaFormation && !cityFormation && !startDateFormation && (!endDateFormation || !intelNowFormation) && descriptionFormation){
            alert('add fromation')
            return
        }
        const formations = {
            id: Math.floor(Math.random() * 1000),
            name: nameFormation,
            esta: estaFormation,
            city: cityFormation,
            startDate: startDateFormation,
            endDate: endDateFormation,
            intelNow: intelNowFormation,
            description: descriptionFormation
        }
        setFormationList(oldList => [...oldList, formations])
        setNameFormation('')
        setEstaFormation('')
        setCityFormation('')
        setStartDateFormation('')
        setEndDateFormation('')
        setIntelNowFormation('')
        setDescriptionFormation('')
    }
    // delete Formation function
    const deleteFormation = (id) => {
        const newArry = formationList.filter(item => item.id !== id);
        setFormationList(newArry);
    }

    // disabled Date formation
    const disabledDateFormation = () => {
        if(disabledFormation === false){
            setDisabledFromation(true)
            setEndDateFormation('')
        }else if (disabledFormation === true) {
            setDisabledFromation(false)
        }
    }
    // disabled Date experience
    const disabledDateExperience = () => {
        if(disabledExperience === false){
            setDisabledExperience(true)
            setEndDateExperience('')
        }else if (disabledExperience === true) {
            setDisabledExperience(false)
        }
    }
    // disabled Date stage
    const disabledDateStage = () => {
        if(disabledStage === false){
            setDisabledStage(true)
            setEndDateStage('')
        }else if (disabledStage === true) {
            setDisabledStage(false)
        }
    }


    // function that add skill
    const addSkill = () => {
        if(!skill && !skillLevel){
            alert('Entre an skill')
            return
        }
        const skills = {
            id: Math.floor(Math.random() * 1000),
            value: skill,
            level: skillLevel
        }
        setSkillList(oldList => [...oldList, skills])
        setSkill("")
    }
    // function that delete skill
    const deletSkill = (id) => {
        const newArry = skillList.filter(item => item.id !== id);
        setSkillList(newArry);
    }

    // ===> function that add lang
    const addLang = () => {
        if(!lang && !langLevel){
            alert('Entre an lang')
            return
        }
        const langs = {
            id: Math.floor(Math.random() * 1000),
            value: lang,
            level: langLevel
        }
        setLangList(oldList => [...oldList, langs])
        setLang("")
    }
    // function that delete lang
    const deleteLang = (id) => {
        const newArry = langList.filter(item => item.id !== id);
        setLangList(newArry);
    }

    const componentRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "emp-data",
        onAfterPrint: () => alert('print sucess')
    });

    return (
        <>
        <div className='visibility'>
        <div className='pdf' ref={componentRef} style={{width: '100%', height: window.innerHeight}}>
            <div className='head-pdf' style={{"backgroundColor": color}}>
                {image.map((upFile) => {
                    return(
                        <>
                            <img className='img-pdf' src={upFile.preview} alt='preview'/>
                        </>
                    )
                })}
                <div>
                <h1 className='name-pdf'>{firstName} {lastName}</h1>
                <div className='details-pdf'>
                    <p className='email-pdf'><MdEmail className='svg'/> {email}</p>
                    <p className='email-pdf'><MdPhone className='svg'/> {phone}</p>
                    <p className='email-pdf'><MdLocationOn className='svg'/> {city}, {zipCode}<br/> {adress}</p>
                </div>
                
                </div>
            </div>
            <div className='main-pdf'>
                {/* right Side --------------------------- */}
                <div className='right-side'>
                    <div className='info lift'>
                        <h2 className='title-1' style={{"color": color}}>Informations <br/> personnelles</h2>
                        <h3 className='remove-margin title-2' style={{"color": color}}>Date de naissance</h3>
                        <p className='remove-margin margin'>{birthday}</p>
                        <h3 className='remove-margin title-2' style={{"color": color}}>Lieu de naissance</h3>
                        <p className='remove-margin margin'>{placeOfBirth}</p>
                        <h3 className='remove-margin title-2' style={{"color": color}}>Sexe</h3>
                        <p className='remove-margin margin'>{gender}</p>
                    </div>
                    <div className='comp lift'>
                        <h2 className='title-1' style={{"color": color}}>Competences</h2>
                        {skillList.map(item => {
                            return(
                                <>
                                    <h3 key={item.id} className='remove-margin title-2'>{item.value}</h3>
                                    <div className='bar margin'><div className='inside-bar' style={{"width": `${item.level}%`, "backgroundColor": color}}></div></div>
                                </>
                            )
                        })}
                        
                    </div>
                    <div className='lang lift'>
                        <h2 className='title-1' style={{"color": color}}>Langues</h2>
                        {langList.map(item => {
                            return(
                                <>
                                    <h3 key={item.id} className='remove-margin title-2'>{item.value}</h3>
                                    <div className='bar margin'><div className='inside-bar' style={{"width": `${item.level}%`, "backgroundColor": color}}></div></div>
                                </>
                            )
                        })}
                    </div>
                </div>
                {/* Left Side --------------------------- */}
                <div className='left-side'>
                    {/* Prifil */}
                    <div className='border-bottom'>
                        <h2 className='remove-margin title-1' style={{"color": color}}>Profil</h2>
                        <p>{profile}</p>
                    </div>
                    {/* Formation */}
                    <div className='border-bottom box padding-bottom'>
                        <h2 className='title-1' style={{"color": color}}>Formation</h2>
                    {
                        formationList.map(e => {
                            return(
                                <>
                                <div className='inline'>
                                    <h4 className='remove-margin title-2'>{e.name}</h4>
                                    <p className='remove-margin'>de {e.startDate} a {e.endDate || e.intelNow}</p>
                                </div>
                                <p className='remove-margin title-3'>{e.city}</p>
                                <p className='remove-margin margin'>{e.description}</p>
                                </>
                            )
                        })
                    }
                    </div>
                    
                    {/* Experience professionnelle */}
                    <div className='border-bottom box padding-bottom'>
                        <h2 className='title-1' style={{"color": color}}>Experience professionnelle</h2>
                    {
                        experienceList.map(e => {
                            return(
                                <>
                                <div className='inline'>
                                    <h4 className='remove-margin title-2'>{e.name}</h4>
                                    <p className='remove-margin'>de {e.startDate} a {e.endDate || e.intelNow}</p>
                                </div>
                                <p className='remove-margin title-3'>{e.city}</p>
                                <p className='remove-margin margin'>{e.description}</p>
                                </>
                            )
                        })
                    }
                    </div>
                    {/* Stage */}
                    <div className='border-bottom box padding-bottom'>
                        <h2 className='title-1' style={{"color": color}}>Stage</h2>
                    {
                        stageList.map(e => {
                            return(
                                <>
                                <div className='inline'>
                                    <h4 className='remove-margin title-2'>{e.name}</h4>
                                    <p className='remove-margin'>de {e.startDate} a {e.endDate || e.intelNow}</p>
                                </div>
                                <p className='remove-margin title-3'>{e.city}</p>
                                <p className='remove-margin margin'>{e.description}</p>
                                </>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className='title-container'>
            <h1 className='title'>Constructeur de CV</h1>
        </div>
        <div className='form'>
            <div className='flex'>
                <label>Coleur: </label>
                <input className='color-input' type="color" onChange={(e) => setColor(e.target.value)} />
            </div>
            <div className='grid-inline'>
            <div {...getRootProps()} className="imagefilde">
                <input {...getInputProps()}/>
                <div className='imagefilde'>
                <div className="dev-img" style={{"display": {displayImage}}}>{
                    image == "" ? <p className='text-img'>Choisissez une<br/>photo</p> : setDisplayImage
                    
                    }
                </div>
                { 
                image.map((upFile) => {
                    return(
                        <>
                            <img src={upFile.preview} alt='preview' style={{"width": "170px", "height": "170px", "borderRadius": "5px", "margin": "2px"}}/>
                        </>
                    )
                })}
                </div>
            </div>
            <div className=''>
                <div>
                    <label>Prénom : </label>
                    <input placeholder='Entrer votre prénom' onChange={(e) => setFirstName(e.target.value)} value={firstName} type="text" required></input>
                </div>
                <div>
                    <label>Nom de famille : </label>
                    <input placeholder='Entrer votre nom de famille' onChange={(e) => setLastName(e.target.value)} value={lastName} type="text" required></input>
                </div>
            </div>
            </div>
            <label>Adresse e-mail : </label>
            <input placeholder='Entrer votre adresse e-mail' onChange={(e) => setEmail(e.target.value)} value={email} type="text" required></input>
            <label>Numéro de téléphone : </label>
            <input placeholder='Entrer votre téléphone' onChange={(e) => setPhone(e.target.value)} value={phone} type="text" required></input>
            <label>Adresse : </label>
            <input placeholder='Entrer votre adresse' onChange={(e) => setAdress(e.target.value)} value={adress} type="text" required></input>
            <div className='grid-inline'>
                <div>
                    <label>Code postal : </label>
                    <input placeholder='Entrer votre code postal' onChange={(e) => setZipCode(e.target.value)} value={zipCode} type="text" required></input>
                </div>
                <div>
                    <label>Ville : </label>
                    <input placeholder='Entrer votre ville' onChange={(e) => setCity(e.target.value)} value={city} type="text" required></input>
                </div>
            </div>
            <label>Date de naissance: </label>
            <input placeholder='Entrer votre date de naissance' onChange={(e) => setBirthday(e.target.value)} value={birthday} type="date" required></input>
            <label>Lieu de naissance: </label>
            <input placeholder='Entrer votre lieu de naissance' onChange={(e) => setPlaceOfBirth(e.target.value)} value={placeOfBirth} type="text" required></input>
            <label>Sexe : </label>
            <select onChange={(e) => setGender(e.target.value)}>
                <option value='' disabled>Choisissez</option>
                <option value='mâle'>mâle</option>
                <option value='Femelle'>Femelle</option>
            </select>
            <label>Compétence : </label>
            <div className='grid-inline'>
            <input onChange={(e) => setSkill(e.target.value)} value={skill} type="text" required></input>
            <div className='grid-inline-3'>
            <select className='grid-3' onChange={(e) => setSkillLevel(e.target.value)}>
                <option value='' disabled selected>Niveau</option>
                <option value='20'>Débutant(e)</option>
                <option value='40'>Intermédiaire</option>
                <option value='60'>Bien</option>
                <option value='80'>Très bien</option>
                <option value='100'>Excellent</option>
            </select> 
            <div className='center'>
                <button onClick={() => addSkill()}>+</button>
            </div>
            </div> 
            </div>
            {skillList.map(item => {
                return(
                    <>
                        <div className='add'>
                                <p className='add-text inline '>{item.value.charAt(0).toUpperCase() + item.value.slice(1)}</p><div className='bar margin' style={{"borderRadius": "4px", "background": "linear-gradient(to right, #bdbdbd, #888888)"}}><div className='inside-bar' style={{"width": `${item.level}%`, "backgroundColor": "#59239E", "borderRadius": "4px"}}></div></div>
                                <button onClick={() => deletSkill(item.id)} className='delete-button'>x</button>
                        </div>
                    </>
                )
            })}
            <label>Langues : </label>
            <div  className='grid-inline'>
            <input onChange={(e) => setLang(e.target.value)} value={lang} type="text" required></input>
            <div className='grid-inline-3'>
            <select className='grid-3' onChange={(e) => setLangLevel(e.target.value)}>
                <option value='' disabled selected>Niveau</option>
                <option value='20'>Débutant(e)</option>
                <option value='40'>Intermédiaire</option>
                <option value='60'>Bien</option>
                <option value='80'>Très bien</option>
                <option value='100'>Excellent</option>
            </select>
            <div className='center'>
                <button onClick={() => addLang()}>+</button>
            </div>
            </div>
            </div>
            {langList.map(item => {
                return(
                    <>
                        <div className='add'>
                                <p className='add-text inline '>{item.value.charAt(0).toUpperCase() + item.value.slice(1)}</p><div className='bar margin' style={{"borderRadius": "4px", "background": "linear-gradient(to right, #bdbdbd, #888888)"}}><div className='inside-bar' style={{"width": `${item.level}%`, "backgroundColor": "#59239E", "borderRadius": "4px"}}></div></div>
                                <button onClick={() => deleteLang(item.id)} className='delete-button'>x</button>
                        </div>
                    </>
                )
            })}
            {/* // Profil ----------------------------------------------------------------------------------------------------- */}
            <label>Profile : </label>
            <textarea onChange={(e) => setProfile(e.target.value)} value={profile}></textarea>
            {/* // Formation -------------------------------------------------------------------------------------------------- */}
            <div className='container'>
                <label>Formation : </label>
                <input onChange={e => setNameFormation(e.target.value)} value={nameFormation} type="text" required></input>
                <div className='grid-inline'>
                    <div className=''>
                        <label>Établissement : </label>
                        <input onChange={e => setEstaFormation(e.target.value)} value={estaFormation} type="text" required></input>
                    </div>
                    <div className=''>
                        <label>Ville : </label>
                        <input onChange={e => setCityFormation(e.target.value)} value={cityFormation} type="text" required></input>
                    </div>
                </div>
                <div className='grid-inline'>
                    <div className=''>
                        <label>Date de début : </label>
                        <input onChange={e => setStartDateFormation(e.target.value)} value={startDateFormation} type="month" required></input>
                    </div>
                    <div>
                        <div className='grid-inline'>
                            <label>Date de fin : </label>
                            <div className='grid-inline-3 nogap'>
                                <label className='grid-3 smallfont'>ce jour : </label>
                                <input onChange={e => setIntelNowFormation(e.target.value)} value={intelNowFormation} className='checkbox' type="checkbox" onClick={() => disabledDateFormation()}></input>
                            </div>
                        </div>
                        <input onChange={e => setEndDateFormation(e.target.value)} value={endDateFormation} className='mt' type="month" required disabled={disabledFormation}></input>
                    </div>
                </div>
                <label>Description : </label>
                <textarea value={descriptionFormation} onChange={e => setDescriptionFormation(e.target.value)}></textarea>
                <button onClick={() => addFormation()}>+</button>
                {
                    formationList.map(item => {
                        return(
                            <div className='add'>
                                <p className='add-text'>{item.name}, {item.esta}. {item.city}</p>
                                <button onClick={() => deleteFormation(item.id)} className='delete-button'>x</button>
                            </div>
                        )
                    })
                }
            </div>
            {/* // Experience --------------------------------------------------------------------------------------------------- */}
            <div className='container'>
                <label>Experience : </label>
                <input onChange={e => setNameExperience(e.target.value)} value={nameExperience} type="text" required></input>
                <div className='grid-inline'>
                    <div className=''>
                        <label>Établissement : </label>
                        <input onChange={e => setEstaExperience(e.target.value)} value={estaExperience} type="text" required></input>
                    </div>
                    <div className=''>
                        <label>Ville : </label>
                        <input onChange={e => setCityExperience(e.target.value)} value={cityExperience} type="text" required></input>
                    </div>
                </div>
                <div className='grid-inline'>
                    <div className=''>
                        <label>Date de début : </label>
                        <input onChange={e => setStartDateExperience(e.target.value)} value={startDateExperience} type="month" required></input>
                    </div>
                    <div>
                        <div className='grid-inline'>
                            <label>Date de fin : </label>
                            <div className='grid-inline-3 nogap'>
                                <label className='grid-3 smallfont'>ce jour : </label>
                                <input onChange={e => setIntelNowExperience(e.target.value)} value={intelNowExperience} className='checkbox' type="checkbox" onClick={() => disabledDateExperience()}></input>
                            </div>
                        </div>
                        <input onChange={e => setEndDateExperience(e.target.value)} value={endDateExperience} className='mt' type="month" required disabled={disabledExperience}></input>
                    </div>
                </div>
                <label>Description : </label>
                <textarea value={descriptionExperience} onChange={e => setDescriptionExperience(e.target.value)}></textarea>
                <button onClick={() => addExperiences()}>+</button>
                {
                    experienceList.map(item => {
                        return(
                            <div className='add'>
                                <p className='add-text'>{item.name}, {item.esta}. {item.city}</p>
                                <button onClick={() => deleteExperiences(item.id)} className='delete-button'>x</button>
                            </div>
                        )
                    })
                }
            </div>
            {/* // Stage  --------------------------------------------------------------------------------------------------- */}
            <div className='container'>
                <label>Stage : </label>
                <input onChange={e => setNameStage(e.target.value)} value={nameStage} type="text" required></input>
                <div className='grid-inline'>
                    <div className=''>
                        <label>Établissement : </label>
                        <input onChange={e => setEstaStage(e.target.value)} value={estaStage} type="text" required></input>
                    </div>
                    <div className=''>
                        <label>Ville : </label>
                        <input onChange={e => setCityStage(e.target.value)} value={cityStage} type="text" required></input>
                    </div>
                </div>
                <div className='grid-inline'>
                    <div className=''>
                        <label>Date de début : </label>
                        <input onChange={e => setStartDateStage(e.target.value)} value={startDateStage} type="month" required></input>
                    </div>
                    <div>
                        <div className='grid-inline'>
                            <label>Date de fin : </label>
                            <div className='grid-inline-3 nogap'>
                                <label className='grid-3 smallfont'>ce jour : </label>
                                <input onChange={e => setIntelNowStage(e.target.value)} value={intelNowStage} className='checkbox' type="checkbox" onClick={() => disabledDateStage()}></input>
                            </div>
                        </div>
                        <input onChange={e => setEndDateStage(e.target.value)} value={endDateStage} className='mt' type="month" required disabled={disabledStage}></input>
                    </div>
                </div>
                <label>Description : </label>
                <textarea value={descriptionStage} onChange={e => setDescriptionStage(e.target.value)}></textarea>
                <button onClick={() => addStage()}>+</button>
                {
                    stageList.map(item => {
                        return(
                            <div className='add'>
                                <p className='add-text'>{item.name}, {item.esta}. {item.city}</p>
                                <button onClick={() => deleteStage(item.id)} className='delete-button'>x</button>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div className='dev-print-button'>
            <button className='print-button' onClick={handlePrint}>print</button>
        </div>
        
        </>
    )
}
export default ReactPdfPrint;