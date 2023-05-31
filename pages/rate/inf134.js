import React from 'react'

// Styles
import home from "../../styles/components/RatingBackground.module.css";
import section from "../../styles/components/SectionBox.module.css";
import question from "../../styles/components/QuestionBox.module.css";

// Components
import Navbar from '../../components/Navbar';

const inf134 = () => {
  return (
    <>
      <Navbar />
      <div className={home.mainBody}>
        <div className={section.titlePadding}></div>
        <div className={section.mainBody}>
          <div className={section.titlePadding}></div>
          <div className={section.courseText}>
            Rate this course - IN4MATX 134
          </div>
          <div className={section.titlePadding}></div>
          <div className={question.main}>
            Would you like to remain anonymous?
            <div className = {question.nameContainer}>
              <label>Yes</label> 
              <input className = {question.YesCheckbox} type="checkbox"></input>
              <label className = {question.NoSpacing}>No</label> 
              <input className = {question.checkbox} type="checkbox"></input>
            </div>
          </div>
          <div className={section.padding}></div>
          <div className={question.main}>
            What is your name?
            <div className = {question.nameContainer}>
              <label >First Name</label> 
              <input className = {question.questionSpacing} type="text"></input>
              <label className = {question.SecondSpacing}>Last Name</label> 
              <input type="text"></input>
            </div>
          </div>
          <div className={section.padding}></div>
          <div className={question.main}>
            What year are you? (1st, 2nd, 3rd, 4th, other)?
            <div className = {question.questionContainer}>
              <label for="year">Year</label>
              <select className = {question.dropdown}>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
                <option value="5th">4th</option>
                <option value="Other">4th</option>

              </select>
            </div>
          </div>
          <div className={section.padding}></div>
          <div className={question.main}>
            What is your major?
            <div className = {question.questionContainer}>
              <label >Major</label> 
              <input className = {question.questionSpacing} type="text"></input>
            </div>
          </div>
          <div className={section.padding}></div>
          <div className={question.main}>
            What is your GPA?
            <div className = {question.questionContainer}>
              <label >GPA</label> 
              <input className = {question.questionSpacing} type="text"></input>
            </div>
          </div>
          <div className={section.padding}></div>
          <div className={question.main}>
            Who was/is your professor?
            <div className = {question.questionContainer}>
              <label >Professor</label> 
              <input className = {question.questionSpacing} type="text"></input>
            </div>
          </div>
          <div className={section.padding}></div>
          <div className={question.main}>
            When did you take this course?
            <div className = {question.nameContainer}>
              <label >Year</label> 
              <input className = {question.questionSpacing} type="text"></input>
              <label className = {question.SecondSpacing}>Quarter</label> 
              <input type="text"></input>
            </div>
          </div>
          <div className={section.padding}></div>
          <div className={question.main}>
            How many hours a week do/did you spend on this class?
            <div className = {question.questionContainer}>
              <label >Hours</label> 
              <input className = {question.questionSpacing} type="text"></input>
            </div>
          </div>
          <div className={section.padding}></div>
          <div className={question.main}>
            How useful was this course?
          </div>
          <div className={section.padding}></div>
          <div className={question.main}>
            How difficult was this course?
          </div>
          <div className={section.padding}></div>
          <div className={question.main}>
            Would you recommend this course?
            <div className = {question.nameContainer}>
              <label>Yes</label> 
              <input className = {question.YesCheckbox} type="checkbox"></input>
              <label className = {question.NoSpacing}>No</label> 
              <input className = {question.checkbox} type="checkbox"></input>
            </div>
          </div>
          <div className={section.padding}></div>
          <div className={question.main}>
            Choose up to 3 that apply to this course
          </div>
          <div className={section.padding}></div>
          <div className={question.main}>
            Additional comments?
          </div>
        </div>
      </div>
    </>
  )
}

export default inf134