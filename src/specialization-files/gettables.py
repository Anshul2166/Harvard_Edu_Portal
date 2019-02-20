import pandas as pd
import csv

tables = pd.read_html("https://a2oj.com/category?ID=410")



df = pd.DataFrame(tables[0])
df.to_csv('haha3.csv')