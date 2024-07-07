import { Document, Image, Page, StyleSheet, Text } from '@react-pdf/renderer';
import React from 'react'

const styles = StyleSheet.create({
    body: {
        paddingTop: 35,
        paddingBottom: 65,
        paddingHorizontal: 35,
    },
    title: {
        fontSize: 24,
        textAlign: "center",
    },
    text: {
        margin: 12,
        fontSize: 14,
        textAlign: "justify",
        fontFamily: "Times-Roman",
    },
    image: {
        marginVertical: 15,
        marginHorizontal: 50,
        marginRight: 300
    },
    imageDay: {
        marginVertical: 15,
        marginHorizontal: 200,
        width: 100,
        height: 100,
    },
    header: {
        position: "absolute",
        fontSize: 12,
        top: 100,
        left: 280,
        textAlign: "center",
        color: "grey",
    },
    pageNumber: {
        position: "absolute",
        fontSize: 12,
        bottom: 30,
        left: 0,
        right: 0,
        textAlign: "center",
        color: "grey",
    },
});
const PDFFile = (props) => {
    const patientJson = localStorage.getItem('patientSchedual') || '[]';
    const patientParse = JSON.parse(patientJson);
    const patient = patientParse.find(patient => patient.id === props.id);
    let satBool = false, sunBool = false, monBool = false, tueBool = false,
        wedBool = false, thuBool = false, friBool = false;
    let sat = 0, sun = 0, mon = 0, tue = 0, wed = 0, thu = 0, fri = 0;

    const arrOfTheDay = () => {
        for (let i = 0; i < patient.meal.length; i++) {
            if (!satBool && patient.meal[i].mealDay === 'Sat') { sat = i; satBool = true }
            if (!sunBool && patient.meal[i].mealDay === 'Sun') { sun = i; sunBool = true }
            if (!monBool && patient.meal[i].mealDay === 'Mon') { mon = i; monBool = true }
            if (!tueBool && patient.meal[i].mealDay === 'Tue') { tue = i; tueBool = true }
            if (!wedBool && patient.meal[i].mealDay === 'Wed') { wed = i; wedBool = true }
            if (!thuBool && patient.meal[i].mealDay === 'Thu') { thu = i; thuBool = true }
            if (!friBool && patient.meal[i].mealDay === 'Fri') { fri = i; friBool = true }
        }
    }
    arrOfTheDay();
    return (
        <Document>
            <Page style={styles.body}>
                <Text style={styles.header} >
                    {`  Patient Name : ${patient.patientName}

                      Age : ${patient.age}

                      weight : ${patient.weight}

                      Date : ${patient.date}

                      `}
                </Text>
                <Image style={styles.image} src={patient.photo} />
                <Text style={styles.text}>
                    {patient.meal.map((data, index) => <Text key={index} style={styles.text}>
                        {data.mealDay === 'Sat' &&
                            <Text>{sat === index && <Text>Saturday</Text>}  {`\n`}
                                <Image style={styles.imageDay} src={data.mealImage} />{`
                               Meal : ${data.meal}
                               Amount : ${data.mealAmount}
                               TotalCalories : ${data.TotalCalories} `}
                               {`\n`}
                            </Text>

                        }
                        {data.mealDay === 'Sun' &&
                            <Text>{`\n`}{index === sun && <Text>Sunday</Text>} {'\n'}
                                <Image style={styles.imageDay} src={data.mealImage} />{`
                               Meal : ${data.meal}
                               Amount : ${data.mealAmount}
                               TotalCalories : ${data.TotalCalories} `}
                                {`\n`}
                            </Text>

                        }
                        {data.mealDay === 'Mon' &&
                            <Text>{`\n`}{index === mon && <Text>Monday</Text>} {'\n'}
                                <Image style={styles.imageDay} src={data.mealImage} />{`
                               Meal : ${data.meal}
                               Amount : ${data.mealAmount}
                               TotalCalories : ${data.TotalCalories} `}
                                {`\n`}
                            </Text>

                        }
                        {data.mealDay === 'Tue' &&
                            <Text>{`\n`}{index === tue && <Text>Tuesday</Text>}  {`\n`}
                                <Image style={styles.imageDay} src={data.mealImage} />{`
                               Meal : ${data.meal}
                               Amount : ${data.mealAmount}
                               TotalCalories : ${data.TotalCalories} `}
                                {`\n`}
                            </Text>

                        }
                        {data.mealDay === 'Wed' &&
                            <Text>{`\n`}{index === wed && <Text>Wednsday</Text>}  {`\n`}
                                <Image style={styles.imageDay} src={data.mealImage} />{`
                               Meal : ${data.meal}
                               Amount : ${data.mealAmount}
                               TotalCalories : ${data.TotalCalories} `}
                                {`\n`}
                            </Text>

                        }
                        {data.mealDay === 'Thu' &&
                            <Text>{`\n`}{index === thu && <Text>Thueday</Text>}  {`\n`}
                                <Image style={styles.imageDay} src={data.mealImage} />{`
                               Meal : ${data.meal}
                               Amount : ${data.mealAmount}
                               TotalCalories : ${data.TotalCalories} `}
                                {`\n`}
                            </Text>

                        }
                        {data.mealDay === 'Fri' &&
                            <Text>{`\n`}{index === fri && <Text>Friday</Text>}  {`\n`}
                                <Image style={styles.imageDay} src={data.mealImage} />{`
                               Meal : ${data.meal}
                               Amount : ${data.mealAmount}
                               TotalCalories : ${data.TotalCalories} `}
                                {`\n`}
                            </Text>

                        }

                    </Text>)}
                </Text>

                <Text
                    style={styles.pageNumber}
                    render={({ pageNumber, totalPages }) =>
                        `${pageNumber} / ${totalPages}`
                    }
                />
            </Page>
        </Document>
    )
}

export default PDFFile
