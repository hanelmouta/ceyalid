import pandas as pd
import matplotlib.pyplot as plt

# Load datasets
gdp_file = "/Users/hanaelmoutaoukil/Downloads/API_NY.GDP.PCAP.CD_DS2_en_csv_v2_76317/API_NY.GDP.PCAP.CD_DS2_en_csv_v2_76317.csv"
depression_file = "/Users/hanaelmoutaoukil/Downloads/Mental health Depression disorder Data copy.csv"

# Load and clean GDP data
gdp_df_raw = pd.read_csv(gdp_file, skiprows=4)
gdp_df = gdp_df_raw[gdp_df_raw['Country Name'].isin(['United States', 'France', 'Ethiopia'])]
gdp_df = gdp_df.loc[:, ['Country Name'] + [str(year) for year in range(1990, 2018)]]
gdp_df = gdp_df.set_index('Country Name').T
gdp_df.index = gdp_df.index.astype(int)
gdp_df.columns.name = None

# Load and clean depression data
depression_df = pd.read_csv(depression_file)
depression_df = depression_df[depression_df['Entity'].isin(['United States', 'France', 'Ethiopia'])]
depression_df = depression_df[['Entity', 'Year', 'Depression (%)']]

# Convert year to int and fix duplicates
depression_df['Year'] = pd.to_numeric(depression_df['Year'], errors='coerce')
depression_df = depression_df[depression_df['Year'].between(1990, 2017)]
depression_df_grouped = depression_df.groupby(['Year', 'Entity'])['Depression (%)'].mean().unstack()

# Plotting GDP and Depression in subplots
fig, axs = plt.subplots(2, 1, figsize=(12, 10), sharex=True)

# Plot GDP per capita
for country in gdp_df.columns:
    axs[0].plot(gdp_df.index, gdp_df[country], label=country)
axs[0].set_title('GDP per Capita (1990–2017)')
axs[0].set_ylabel('GDP (Current US$)')
axs[0].legend()
axs[0].grid(True)

# Plot Depression Rates
for country in depression_df_grouped.columns:
    axs[1].plot(depression_df_grouped.index, depression_df_grouped[country], label=country)
axs[1].set_title('Depression Prevalence (1990–2017)')
axs[1].set_ylabel('Depression Rate (%)')
axs[1].set_xlabel('Year')
axs[1].legend()
axs[1].grid(True)

plt.tight_layout()
plt.show()
