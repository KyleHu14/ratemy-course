import React from 'react'

// Styles
import home from "../../styles/pages/course-rate-page/RatingBackground.module.css";
import section from "../../styles/pages/course-rate-page/SectionBox.module.css";
import question from "../../styles/pages/course-rate-page/QuestionBox.module.css";

// Components
import Navbar from '../../components/Navbar';

// Nextjs
import Link from "next/link";


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
              <input className = {question.YesCheckbox} type="radio"/>
              <label className = {question.NoSpacing}>No</label> 
              <input className = {question.checkbox} type="radio"/>
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
                <option value="5th">5th</option>
                <option value="Other">Other</option>

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
            <div className = {question.radioButtons}>
              <label>
                <input type="radio" name="option" value="1"/>1
                <span>Irrelevant</span>
              </label>
              <label>
                <input type="radio" name="option" value="2"/>2
                <span>Not for me</span>
              </label>
              <label>
                <input type="radio" name="option" value="3"/>3
                <span>Average</span>
              </label>
              <label>
                <input type="radio" name="option" value="4"/>4
                <span>Worth it</span>
              </label>
              <label>
                <input type="radio" name="option" value="5"/>5
                <span>Life-changing</span>
              </label>
            </div>
          </div>
          <div className={section.padding}></div>
          <div className={question.main}>
            How difficult was this course?
            <div className = {question.radioButtons}>
              <label>
                <input type="radio" name="option" value="1"/>1
                <span>Easy</span>
              </label>
              <label>
                <input type="radio" name="option" value="2"/>2
                <span>Light work</span>
              </label>
              <label>
                <input type="radio" name="option" value="3"/>3
                <span>Manageable</span>
              </label>
              <label>
                <input type="radio" name="option" value="4"/>4
                <span>Tough</span>
              </label>
              <label>
                <input type="radio" name="option" value="5"/>5
                <span>Felt Impossible</span>
              </label>
            </div>
          </div>
          <div className={section.padding}></div>
          <div className={question.main}>
            Would you recommend this course?
            <div className = {question.nameContainer}>
              <label>Yes</label> 
              <input className = {question.YesCheckbox} type="radio"/>
              <label className = {question.NoSpacing}>No</label> 
              <input className = {question.checkbox} type="radio"/>
            </div>
          </div>
          <div className={section.padding}></div>
          <div className={question.main}>
            Choose up to 3 that apply to this course
          </div>
          <div className={section.padding}></div>
          <div className={question.main}>
            Additional comments?
            <textarea className={question.additionalComment} rows="4" cols="50"></textarea>
          </div>
          <div className={section.largePadding}></div>
            <button className={question.submitButton}>
                <Link className={question.Link}href="/course/inf134">
                  Submit
                </Link>
				    </button>
          <div className={section.largePadding}></div>
        </div>
      </div>
    </>
  )
}

export default inf134