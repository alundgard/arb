import csv
import json
import pprint as pp

def remove_test(_doc):
    return [d for d in _doc if d['username'] != 'TEST']

def get_resp_time(_ans):
    return int(_ans['time2']) - int(_ans['time1'])

def ms2s(_ms):
    return _ms / 1000

with open('./processes.json') as process_file:
    process = json.load(process_file)
    process = remove_test(process)

with open('./surveys.json') as survey_file:
    survey = json.load(survey_file)
    survey = remove_test(survey)

for d in process:
    pp.pprint(d)
    print(ms2s(get_resp_time(d)))
