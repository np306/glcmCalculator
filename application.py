#import libraries
from flask import Flask, request, render_template
import numpy as numpy
from skimage.feature import greycomatrix, greycoprops
application = Flask(__name__)

# generate random matrix of size 5,6 and levels 1 to 8
randomImageMatrix = numpy.random.randint(1, 9, size=(5, 6))

# default values
defaultDist = 1
defaultAngle = 0

# calculate greycomatrix
resultvalue = greycomatrix(randomImageMatrix, [defaultDist], [defaultAngle], levels=randomImageMatrix.max()+1)
resultantGlcmMatrix = resultvalue[:, :, 0, 0][1:, 1:]
print(resultantGlcmMatrix)


@application.route('/')
def render_html():  # put application's code here
    return render_template('glcmView.html', Matrix1=randomImageMatrix, GlcmMatrix=resultantGlcmMatrix, Distance=1, Angle=0)


@application.route('/', methods=['POST'])
def calculate_glcm():
    distance = int(request.form['distance'])
    angle = request.form['angle']
    angleValue = 0
    if angle == "45":
        angleValue = 3*numpy.pi/4
    elif angle == "90":
        angleValue = numpy.pi/2
    elif angle == "135":
        angleValue = numpy.pi/4

    resultant = greycomatrix(randomImageMatrix, [distance], [angleValue], levels=randomImageMatrix.max()+1)
    if angleValue!=0:
        resultantMatrix = numpy.transpose(resultant[:, :, 0, 0][1:, 1:])
    else:
        resultantMatrix = resultant[:, :, 0, 0][1:, 1:]
    return render_template('glcmView.html', Matrix1=randomImageMatrix, GlcmMatrix=resultantMatrix, Distance=distance, Angle=angle)


if __name__ == '__main__':
    application.run()
